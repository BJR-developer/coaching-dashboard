import { AuthFooter } from "@/components/auth/auth-footer";
import { AuthHeader } from "@/components/auth/auth-header";
import { UpdatePasswordSection } from "@/components/auth/update-password-section";

export default function UpdatePasswordPage() {
  return (
    <>
      <AuthHeader showClose closeHref="/sign-in" />
      <main className="flex flex-grow items-center justify-center px-6 py-12">
        <UpdatePasswordSection />
      </main>
      <AuthFooter />
    </>
  );
}
