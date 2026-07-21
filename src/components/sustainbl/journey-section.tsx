"use client";

import { Check, ChevronDown, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { PageHeader } from "@/components/layout/page-shell";
import type { JourneyFlags, JourneyMilestone } from "@/lib/portal/iep-journey-defaults";
import { useJourneyMutation, useJourneyQuery } from "@/lib/portal/query/hooks/use-journey";

export function JourneySection() {
  const journeyQuery = useJourneyQuery();
  const journeyMutation = useJourneyMutation();

  const milestones = (journeyQuery.data?.journey?.milestones || []).filter(
    (m) => !m.custom,
  );
  const flags = journeyQuery.data?.journey?.flags || {
    review_ard: false,
    mdard: false,
    staar_failure: false,
  };
  const loading = journeyQuery.isPending && !journeyQuery.data;
  const saving = journeyMutation.isPending;
  const error = journeyQuery.error?.message || journeyMutation.error?.message || null;

  function persist(nextMilestones: JourneyMilestone[], nextFlags: JourneyFlags) {
    journeyMutation.mutate({
      milestones: nextMilestones.filter((m) => !m.custom),
      flags: nextFlags,
    });
  }

  function toggleMilestone(id: string) {
    const next = milestones.map((m) => {
      if (m.id !== id) return m;
      const done = !m.done;
      return {
        ...m,
        done,
        completed_at: done ? new Date().toISOString() : null,
      };
    });
    persist(next, flags);
  }

  function toggleFlag(key: keyof JourneyFlags) {
    persist(milestones, { ...flags, [key]: !flags[key] });
  }

  return (
    <div className="page-pad">
      <PageHeader
        title="IEP process journey"
        description={
          <>
            A shared map of where you are in the special education process. Mark each
            step as you complete it.
            {saving ? " Saving…" : null}
          </>
        }
      />

      {error ? (
        <p className="mb-6 rounded-lg border border-tertiary/30 bg-tertiary/5 px-4 py-3 text-sm text-tertiary">
          {error}
        </p>
      ) : null}

      {loading ? (
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Loader2 className="animate-spin" size={18} /> Loading…
        </div>
      ) : (
        <>
          <ol className="mb-12 max-w-2xl">
            {milestones.map((m, index) => {
              const isLast = index === milestones.length - 1;
              return (
                <li key={m.id} className="relative flex gap-4">
                  {/* Rail: circle + connecting line + arrow */}
                  <div className="relative flex w-8 shrink-0 flex-col items-center">
                    <button
                      type="button"
                      onClick={() => toggleMilestone(m.id)}
                      aria-pressed={m.done}
                      aria-label={`${m.done ? "Unmark" : "Mark"} ${m.label}`}
                      className={`relative z-[1] flex h-8 w-8 items-center justify-center rounded-full border-2 transition-colors ${
                        m.done
                          ? "border-primary bg-primary text-on-primary"
                          : "border-outline-variant/50 bg-background text-transparent hover:border-primary/50"
                      }`}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </button>
                    {!isLast ? (
                      <div
                        className="flex flex-1 flex-col items-center py-1"
                        aria-hidden
                      >
                        <span
                          className={`w-px flex-1 min-h-[1.75rem] ${
                            m.done ? "bg-primary/35" : "bg-outline-variant/35"
                          }`}
                        />
                        <ChevronDown
                          size={14}
                          className={
                            m.done ? "text-primary/45" : "text-outline-variant/45"
                          }
                        />
                      </div>
                    ) : null}
                  </div>

                  <motion.button
                    type="button"
                    onClick={() => toggleMilestone(m.id)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.2 }}
                    className={`min-w-0 flex-1 text-left ${isLast ? "pb-1" : "pb-6"}`}
                  >
                    <span
                      className={`block font-headline text-lg leading-snug ${
                        m.done ? "text-on-surface-variant" : "text-on-surface"
                      }`}
                    >
                      {m.label}
                    </span>
                    {m.guidance ? (
                      <span className="mt-1 block text-sm leading-relaxed text-on-surface-variant">
                        {m.guidance}
                      </span>
                    ) : null}
                  </motion.button>
                </li>
              );
            })}
          </ol>

          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
            Situation flags
          </h2>
          <p className="mb-3 max-w-xl text-sm text-on-surface-variant">
            Common special situations that change meeting prep. Toggle if they apply.
          </p>
          <div className="flex flex-wrap gap-3">
            {(
              [
                ["review_ard", "Review ARD"],
                ["mdard", "MDARD"],
                ["staar_failure", "STAAR-failure review"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => toggleFlag(key)}
                className={
                  flags[key]
                    ? "rounded-full bg-primary px-4 py-2 text-sm font-bold text-on-primary"
                    : "rounded-full bg-surface-container-low px-4 py-2 text-sm font-bold text-on-surface-variant"
                }
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
