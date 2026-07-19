import { Icon } from "@/components/ui/icon";
import { CHILD_NAME } from "@/lib/nav";
import { mockTimeline } from "@/lib/mock-data";

export function TimelineSection() {
  return (
    <div className="mx-auto max-w-5xl px-12 pb-32 pt-8">
      <section className="mb-16">
        <div className="flex items-end justify-between">
          <div>
            <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary">
              {CHILD_NAME}&apos;s SustainBL
            </span>
            <h1 className="font-headline text-5xl leading-tight text-on-surface">
              Educational Timeline
            </h1>
          </div>
          <p className="pb-1 font-label text-sm text-on-surface-variant">Last updated: Oct 24, 2023</p>
        </div>
      </section>

      <section className="relative">
        <div className="absolute bottom-0 left-8 top-0 w-px bg-gradient-to-b from-transparent via-outline-variant to-transparent" />
        <div className="space-y-24">
          {mockTimeline.map((event) => (
            <div
              key={event.title}
              className={`relative flex items-start gap-12 ${event.upcoming ? "opacity-60" : ""}`}
            >
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container">
                <Icon name={event.icon} className="text-primary" size={22} />
              </div>
              <div className="pt-2">
                <span
                  className={`font-label text-sm ${event.upcoming ? "font-bold text-primary" : "text-on-surface-variant"}`}
                >
                  {event.date}
                </span>
                <h2 className="mb-3 mt-1 font-headline text-3xl text-on-surface">{event.title}</h2>
                <p className="max-w-2xl font-light leading-relaxed text-on-surface-variant">
                  {event.body}
                </p>
                {"insight" in event && event.insight ? (
                  <div className="mt-6 flex items-center gap-4 rounded-xl border border-outline-variant/30 bg-surface-container-high p-4 shadow-soft">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="lightbulb" className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                        Insight
                      </p>
                      <p className="text-sm font-semibold">{event.insight}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
