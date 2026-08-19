import type { ContactPayload } from "@/types";

export interface EmailSendResult {
  ok: boolean;
  error?: string;
}

export interface EmailProvider {
  send(payload: ContactPayload): Promise<EmailSendResult>;
}

/**
 * Swap this implementation for Resend, Nodemailer, SendGrid, or Formspree.
 * Do not put provider secrets in client components.
 */
class UnconfiguredEmailProvider implements EmailProvider {
  async send(payload: ContactPayload): Promise<EmailSendResult> {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] Email provider is not configured. Payload:", {
        name: payload.name,
        email: payload.email,
        subject: payload.subject,
      });
    }

    return { ok: true };
  }
}

export const emailProvider: EmailProvider = new UnconfiguredEmailProvider();
