import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CHILD_NAME } from "@/lib/nav";

export function AskCopilotTeaser() {
  return (
    <section className="mt-10 border-t border-outline-variant/20 pt-8">
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <div className="flex items-center justify-center gap-2 text-primary">
          <Sparkles size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Ask Copilot</span>
        </div>
        <Link href="/ask-copilot" className="relative block">
          <span className="flex w-full items-center rounded-full bg-surface-container-low py-3.5 pl-8 pr-14 text-left text-sm text-on-surface-variant/40">
            Ask anything about {CHILD_NAME}&apos;s IEP...
          </span>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary">
            <ArrowRight size={20} />
          </span>
        </Link>
      </div>
    </section>
  );
}
