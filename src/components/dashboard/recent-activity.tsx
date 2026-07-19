import Link from "next/link";
import { mockActivity } from "@/lib/mock-data";

export function RecentActivity() {
  return (
    <section className="border-t border-outline-variant/20 pt-6">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
          Recent Activity
        </h2>
        <Link
          href="/sustainbl/timeline"
          className="text-xs font-bold text-on-surface-variant transition-colors hover:text-primary"
        >
          View History
        </Link>
      </div>
      <div className="space-y-4">
        {mockActivity.map((item) => (
          <div key={item.title} className="flex items-start justify-between gap-4">
            <div className="space-y-0.5">
              <p className="font-medium text-on-surface">{item.title}</p>
              <p className="text-sm text-on-surface-variant">{item.detail}</p>
            </div>
            <span className="shrink-0 text-[10px] font-bold uppercase text-on-surface-variant/40">
              {item.when}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
