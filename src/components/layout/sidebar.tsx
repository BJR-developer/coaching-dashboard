"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { Icon } from "@/components/ui/icon";
import { useAppSession } from "@/components/auth/session-provider";
import { signOutAction } from "@/lib/auth/actions";
import { getSidebarNav } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/dashboard") return pathname === "/dashboard";
  if (href === "/sustainbl") return pathname.startsWith("/sustainbl");
  if (href === "/meetings") return pathname.startsWith("/meetings");
  if (href === "/reports") return pathname.startsWith("/reports");
  if (href === "/setup") return pathname.startsWith("/setup");
  if (href === "/advocate") return pathname.startsWith("/advocate");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar() {
  const pathname = usePathname();
  const { theme, copy, displayName } = useAppSession();
  const nav = getSidebarNav(theme);

  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-outline-variant/60 bg-surface-container-low">
      <div className="border-b border-outline-variant/30 px-5 py-6">
        <BrandLogo
          href="/dashboard"
          size="md"
          showWordmark
          tagline={copy.tagline}
          priority
        />
        <p className="mt-3 truncate font-body text-xs text-on-surface-variant">
          {displayName}
          <span className="mx-1.5 text-outline-variant">·</span>
          {copy.programLabel}
        </p>
      </div>

      <nav className="mt-3 flex-1 space-y-1 overflow-y-auto px-2">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              key={item.id}
              href={item.href}
              className={
                active
                  ? "mx-2 mb-1 flex items-center gap-3 rounded-lg bg-primary-container px-4 py-3 font-bold text-on-primary-container"
                  : "mx-2 mb-1 flex items-center gap-3 rounded-lg px-4 py-3 text-on-surface-variant transition-colors hover:bg-surface-variant/50"
              }
            >
              <Icon name={item.icon} size={20} />
              <span className="font-body text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 border-t border-outline-variant/30 p-4">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-2 text-sm text-on-surface-variant hover:text-primary"
        >
          <Icon name="settings" size={18} />
          Settings
        </Link>
        <form action={signOutAction}>
          <button
            type="submit"
            className="flex w-full items-center gap-3 px-4 py-2 text-sm text-on-surface-variant hover:text-primary"
          >
            <LogOut size={18} />
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
