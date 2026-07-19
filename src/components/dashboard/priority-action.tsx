import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { mockPriority } from "@/lib/mock-data";

export function PriorityAction() {
  return (
    <section className="py-2">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
        Priority Action
      </h2>
      <div className="flex flex-col items-start gap-4 md:flex-row">
        <div className="flex-1">
          <h3 className="mb-2 font-headline text-2xl text-on-surface md:text-3xl">
            {mockPriority.title}
          </h3>
          <p className="mb-4 leading-relaxed text-on-surface-variant">{mockPriority.description}</p>
          <Link
            href={mockPriority.href}
            className="inline-flex items-center gap-2 border-b border-primary/30 pb-1 font-bold text-primary transition-all hover:border-primary"
          >
            Start Preparation
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="shrink-0 text-right">
          <span className="text-xs font-bold uppercase tracking-widest text-error">
            {mockPriority.dueLabel}
          </span>
        </div>
      </div>
    </section>
  );
}
