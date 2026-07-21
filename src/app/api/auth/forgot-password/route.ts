import { NextResponse, type NextRequest } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendBrandPasswordResetEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = String(body.email || "").trim().toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Email address is required." },
        { status: 400 }
      );
    }

    const supabaseAdmin = createAdminClient();

    // Fetch profile to resolve name
    const { data: profile } = await supabaseAdmin
      .from("profiles")
      .select("name, first_name, last_name")
      .eq("email", email)
      .maybeSingle();

    const clientName =
      profile?.name ||
      [profile?.first_name, profile?.last_name].filter(Boolean).join(" ") ||
      email.split("@")[0];

    const origin =
      process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.NEXT_PUBLIC_BASE_URL ||
      "http://localhost:3001";

    const baseUrl = origin.replace(/\/$/, "");

    try {
      const { data: linkData, error: linkError } = await supabaseAdmin.auth.admin.generateLink({
        type: "recovery",
        email,
        options: {
          redirectTo: `${baseUrl}/auth/confirm?next=/update-password`,
        },
      });

      if (linkError || !linkData?.properties) {
        console.error("[ForgotPasswordAPI] Error generating recovery link:", linkError);
      } else {
        const tokenHash =
          linkData.properties.hashed_token ||
          (linkData.properties.action_link
            ? new URL(linkData.properties.action_link).searchParams.get("token") ||
              new URL(linkData.properties.action_link).searchParams.get("token_hash")
            : null);

        if (tokenHash) {
          const resetUrl = `${baseUrl}/auth/confirm?token_hash=${tokenHash}&type=recovery&next=/update-password`;

          const emailResult = await sendBrandPasswordResetEmail({
            email,
            name: clientName,
            resetUrl,
          });

          if (!emailResult.success) {
            console.error("[ForgotPasswordAPI] Resend error:", emailResult.error);
          }
        }
      }
    } catch (generateErr) {
      console.error("[ForgotPasswordAPI] Unexpected error during setup:", generateErr);
    }

    // Always return success to prevent email enumeration
    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to process request";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
