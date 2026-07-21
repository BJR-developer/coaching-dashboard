import { Resend } from "resend";
import * as React from "react";
import { render } from "@react-email/render";
import { PasswordResetEmail } from "@/components/emails/PasswordResetEmail";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

export interface SendPasswordResetEmailParams {
  email: string;
  name: string;
  resetUrl: string;
}

export async function sendBrandPasswordResetEmail({
  email,
  name,
  resetUrl,
}: SendPasswordResetEmailParams) {
  try {
    const resend = getResendClient();
    const html = await render(
      React.createElement(PasswordResetEmail, {
        name,
        resetUrl,
      })
    );

    const fromEmail = process.env.RESEND_FROM_EMAIL || "iep@sustainbl.org";
    const from = `IEP Support Services <${fromEmail}>`;

    const { data, error } = await resend.emails.send({
      from,
      to: [email],
      subject: "Reset your SustainBL IEP Portal password",
      html,
    });

    if (error) {
      console.error("[Resend] Error sending IEP password reset:", error);
      return { success: false, error };
    }
    return { success: true, data };
  } catch (err) {
    console.error("[Resend] Fatal error sending password reset:", err);
    return { success: false, error: err };
  }
}
