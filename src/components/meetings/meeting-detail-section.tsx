import Link from "next/link";
import { Calendar, ChevronRight, Clock, Sparkles, User } from "lucide-react";

const questions = [
  {
    q: "What are your primary concerns regarding social interaction during recess?",
    a: "I expressed that they often feel overwhelmed by the noise level and tend to isolate. I requested more structured buddy-system activities.",
  },
  {
    q: "Do you agree with the proposed reduction in occupational therapy frequency?",
    a: "I disagreed, noting fine motor skills still lag in handwriting. We compromised on maintaining current frequency for one more quarter.",
  },
  {
    q: "Are there any specific accommodations at home we should mirror at school?",
    a: "Visual timers have been transformative for evening homework. I suggested a similar countdown for classroom transitions.",
  },
];

const notes = [
  {
    title: "Accommodation Update",
    body: "Speech-to-text software approved for lengthy writing assignments. Teacher will provide training next week.",
  },
  {
    title: "Behavioral Strategy",
    body: 'Introduction of a "cool-down" pass that can be used without verbalizing during overstimulation.',
  },
  {
    title: "Assessment Schedule",
    body: "Standardized testing in a quiet room with 50% extended time per the updated IEP.",
  },
  {
    title: "Team Action Item",
    body: "Special Education Coordinator to send finalized IEP for digital signature by Friday evening.",
  },
];

export function MeetingDetailSection({ id }: { id: string }) {
  return (
    <div className="mx-auto max-w-4xl px-12 pb-16 pt-8">
      <nav className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
        <Link href="/meetings" className="hover:text-primary">
          Meetings
        </Link>
        <ChevronRight size={12} />
        <span className="text-on-surface">Annual IEP Review</span>
      </nav>

      <header className="mb-12">
        <h1 className="mb-2 font-headline text-5xl font-medium leading-tight text-on-surface">
          Annual IEP Review
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-sm text-on-surface-variant">
          <span className="flex items-center gap-1">
            <Calendar size={14} /> May 14, 2024
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> 45 minutes
          </span>
          <span className="flex items-center gap-1">
            <User size={14} /> Lincoln Elementary Team
          </span>
          <span className="text-xs text-on-surface-variant/50">#{id}</span>
        </div>
      </header>

      <section className="mb-16">
        <div className="mb-6 flex items-center gap-2">
          <Sparkles className="text-primary" size={18} />
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">AI Summary</h2>
        </div>
        <p className="max-w-3xl font-headline text-xl italic leading-relaxed text-on-surface">
          &ldquo;The meeting focused on progress in literacy and executive functioning. The team
          agreed that while reading fluency improved, continued support is needed for self-regulation
          during transitions. New goals emphasize assistive technology.&rdquo;
        </p>
      </section>

      <section className="mb-16">
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
          Questions & Discussion
        </h2>
        <div className="divide-y divide-outline-variant/40">
          {questions.map((item) => (
            <div
              key={item.q}
              className="flex flex-col gap-4 py-6 md:flex-row md:items-start md:gap-12"
            >
              <div className="md:w-1/3">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  The Question
                </h3>
                <p className="font-semibold leading-snug text-on-surface">{item.q}</p>
              </div>
              <div className="md:w-2/3">
                <h3 className="mb-2 text-xs font-bold uppercase tracking-tighter text-on-surface-variant">
                  What you said
                </h3>
                <p className="leading-relaxed text-on-surface-variant">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-on-surface-variant">
          AI Captured Notes
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
          {notes.map((n) => (
            <div key={n.title} className="flex items-start gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <div>
                <p className="mb-1 font-bold text-on-surface">{n.title}</p>
                <p className="text-sm leading-relaxed text-on-surface-variant">{n.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
