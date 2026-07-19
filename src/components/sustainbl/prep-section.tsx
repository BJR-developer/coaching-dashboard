import { AlertTriangle, Plus } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { CHILD_NAME } from "@/lib/nav";
import { mockFlags, mockParentNotes, mockPrepQuestions } from "@/lib/mock-data";

export function PrepSection() {
  return (
    <section className="mx-auto w-full max-w-6xl p-12">
      <div className="mb-12">
        <span className="mb-2 block font-body text-sm font-bold uppercase tracking-widest text-primary">
          Step 03
        </span>
        <h1 className="mb-4 font-headline text-5xl text-on-surface">
          {CHILD_NAME}&apos;s SustainBL: Preparation
        </h1>
        <p className="max-w-xl text-lg text-on-surface-variant">
          Curate your thoughts, flags, and essential questions before the upcoming IEP review
          meeting.
        </p>
      </div>

      <div className="max-w-3xl space-y-16">
        <section>
          <div className="mb-8 flex items-baseline justify-between border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline text-3xl text-on-surface">Questions to Ask</h2>
            <button
              type="button"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary transition-colors hover:text-primary/80"
            >
              <Plus size={14} />
              Add Question
            </button>
          </div>
          <div className="space-y-8">
            {mockPrepQuestions.map((q) => (
              <div key={q.n} className="flex items-start gap-6">
                <span className="font-headline text-2xl text-primary/40">{q.n}</span>
                <div>
                  <p className="mb-1 text-lg font-medium text-on-surface">{q.title}</p>
                  <p className="text-sm italic text-on-surface-variant">{q.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline text-3xl text-on-surface">Must-ask Flags</h2>
          </div>
          <div className="space-y-8">
            {mockFlags.map((flag) => (
              <div key={flag.title} className="flex items-start gap-6">
                <AlertTriangle className="mt-1 text-tertiary" size={20} />
                <div>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-tertiary">
                    {flag.label}
                  </span>
                  <p className="mb-1 text-lg font-medium text-on-surface">{flag.title}</p>
                  <p className="text-sm text-on-surface-variant">{flag.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-8 flex items-baseline justify-between border-b border-outline-variant/30 pb-4">
            <h2 className="font-headline text-3xl text-on-surface">Parent Notes</h2>
            <button
              type="button"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary"
            >
              Add Note
            </button>
          </div>
          <div className="space-y-8">
            {mockParentNotes.map((note) => (
              <p
                key={note.slice(0, 24)}
                className="border-l-2 border-primary/20 pl-6 font-body text-lg leading-relaxed text-on-surface-variant"
              >
                {note}
              </p>
            ))}
          </div>
        </section>

        <section className="border-t border-outline-variant/20 pt-12">
          <div className="max-w-xl">
            <Icon name="lightbulb" className="mb-4 block text-primary" size={24} />
            <p className="mb-4 font-headline text-2xl italic leading-snug text-on-surface">
              &ldquo;The best meeting prep is the one that gives you a voice when emotions run
              high.&rdquo;
            </p>
            <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Advocate Insight
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
