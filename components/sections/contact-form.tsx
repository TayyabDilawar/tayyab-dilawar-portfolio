"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions/contact";
import { Button } from "@/components/ui/button";
import type { ContactState } from "@/types";
import { cn } from "@/lib/utils";

const initialState: ContactState = {
  status: "idle",
  message: "",
};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <form action={action} className="space-y-4" noValidate>
      <Field
        id="name"
        name="name"
        label="Name"
        autoComplete="name"
        error={state.fieldErrors?.name}
      />
      <Field
        id="email"
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        error={state.fieldErrors?.email}
      />
      <Field
        id="subject"
        name="subject"
        label="Subject"
        error={state.fieldErrors?.subject}
      />
      <Field
        id="message"
        name="message"
        label="Message"
        textarea
        error={state.fieldErrors?.message}
      />
      <Button type="submit" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
      {state.status === "success" ? (
        <p className="text-sm text-success" role="status">
          {state.message}
        </p>
      ) : null}
      {state.status === "error" ? (
        <p className="text-sm text-danger" role="alert">
          {state.message}
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  autoComplete,
  textarea = false,
  error,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  autoComplete?: string;
  textarea?: boolean;
  error?: string;
}) {
  const classes = cn(
    "w-full rounded-xl border bg-background px-3 py-2.5 text-sm outline-none",
    error ? "border-danger" : "border-border focus:border-accent",
  );

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={classes}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={classes}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1 text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
