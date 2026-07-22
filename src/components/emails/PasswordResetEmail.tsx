import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
  Hr,
  Button,
} from "@react-email/components";

interface PasswordResetEmailProps {
  name: string;
  resetUrl: string;
  appName?: string;
  supportEmail?: string;
  logoUrl?: string;
}

export const PasswordResetEmail: React.FC<PasswordResetEmailProps> = ({
  name,
  resetUrl,
  appName = "SustainBL IEP Portal",
  supportEmail = "iep@sustainbl.org",
  logoUrl = "https://www.sustainbl.org/imgs/sustainbl-logos/Light%20Orange.png",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Reset Your IEP Portal Password</Preview>
      <Body style={{ backgroundColor: "#fdfaf5", padding: "20px 0", fontFamily: "sans-serif" }}>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "24px",
            border: "1px solid #edf2f7",
            boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <Section style={{ textAlign: "center", padding: "40px 20px 0" }}>
            <Img
              src={logoUrl}
              width="180"
              alt="SustainBL Logo"
              style={{ margin: "0 auto" }}
            />
          </Section>

          {/* Content */}
          <Section style={{ padding: "32px 48px" }}>
            <Text
              style={{
                textAlign: "center",
                color: "#1e293b",
                fontSize: "26px",
                fontWeight: "700",
                margin: "0 0 24px",
              }}
            >
              Reset Your IEP Portal Password
            </Text>

            <Text
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#475569",
                textAlign: "center",
                margin: "0 0 24px",
              }}
            >
              Hello {name},
              <br />
              <br />
              You (or your IEP advocate) requested a password reset for your {appName} account. Click the button below to securely update your password and continue accessing your student&apos;s IEP case file, accommodations, and meeting schedule.
            </Text>

            <div
              style={{
                backgroundColor: "#fff7ed",
                borderRadius: "16px",
                padding: "24px",
                marginBottom: "32px",
                border: "1px solid #ffedd5",
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  margin: 0,
                  color: "#9a3412",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                For your security and privacy, this password reset link expires after single use.
              </Text>
            </div>

            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <Button
                href={resetUrl}
                style={{
                  backgroundColor: "#ea580c",
                  borderRadius: "12px",
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                  textAlign: "center",
                  display: "inline-block",
                  padding: "16px 36px",
                }}
              >
                Reset IEP Password &amp; Continue
              </Button>
            </div>

            <Text
              style={{
                fontSize: "14px",
                color: "#64748b",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Need help? Reach out to your advisor at{" "}
              <a
                href={`mailto:${supportEmail}`}
                style={{
                  color: "#ea580c",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                {supportEmail}
              </a>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={{ padding: "0 48px 48px", textAlign: "center" }}>
            <Hr style={{ borderColor: "#edf2f7", marginBottom: "32px" }} />
            <Text
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                margin: "0 0 8px",
              }}
            >
              &copy; {new Date().getFullYear()} IEP Support Services. All rights reserved.
            </Text>
            <Text
              style={{
                fontSize: "12px",
                color: "#94a3b8",
                margin: 0,
                fontWeight: "600",
              }}
            >
              Advocating for Your Child&apos;s Education.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
