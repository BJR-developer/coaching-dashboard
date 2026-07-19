import { AuthFooter } from "@/components/auth/auth-footer";
import { SignInSection } from "@/components/auth/sign-in-section";

export default function SignInPage() {
  return (
    <>
      <main className="flex flex-grow items-center justify-center px-6 py-12 md:py-24">
        <SignInSection />
      </main>
      <AuthFooter />
    </>
  );
}
