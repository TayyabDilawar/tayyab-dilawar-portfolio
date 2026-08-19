"use server";

import { emailProvider } from "@/lib/email";
import type { ContactPayload, ContactState } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, key: keyof ContactPayload): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload): ContactState["fieldErrors"] {
  const fieldErrors: ContactState["fieldErrors"] = {};

  if (payload.name.length < 2) {
    fieldErrors.name = "Name must be at least 2 characters.";
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    fieldErrors.email = "Enter a valid email address.";
  }

  if (payload.subject.length < 3) {
    fieldErrors.subject = "Subject must be at least 3 characters.";
  }

  if (payload.message.length < 10) {
    fieldErrors.message = "Message must be at least 10 characters.";
  }

  return Object.keys(fieldErrors).length > 0 ? fieldErrors : undefined;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const payload: ContactPayload = {
    name: readField(formData, "name"),
    email: readField(formData, "email"),
    subject: readField(formData, "subject"),
    message: readField(formData, "message"),
  };

  const fieldErrors = validate(payload);
  if (fieldErrors) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      fieldErrors,
    };
  }

  const result = await emailProvider.send(payload);
  if (!result.ok) {
    return {
      status: "error",
      message:
        result.error ??
        "Unable to send right now. Email me directly and I will reply.",
    };
  }

  return {
    status: "success",
    message: "Thanks — I will get back to you shortly.",
  };
}
