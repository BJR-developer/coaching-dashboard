import { AuthFooter } from "@/components/auth/auth-footer";
import { CreateAccountSection } from "@/components/auth/create-account-section";

export default function CreateAccountPage() {
  return (
    <>
      <main className="flex flex-grow items-center justify-center px-6 py-12 md:py-24">
        <CreateAccountSection />
      </main>
      <AuthFooter />
    </>
  );
}
