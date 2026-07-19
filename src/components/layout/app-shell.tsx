import { Sidebar } from "@/components/layout/sidebar";
import { SessionProvider } from "@/components/auth/session-provider";
import type { AppSession } from "@/lib/auth/session";

export function AppShell({
  session,
  children,
}: {
  session: AppSession;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={session}>
      <div
        data-theme={session.theme}
        className="min-h-screen bg-background text-on-surface"
      >
        <Sidebar />
        <main className="ml-64 min-h-screen">{children}</main>
      </div>
    </SessionProvider>
  );
}
