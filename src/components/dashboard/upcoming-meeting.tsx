import Link from "next/link";
import { CoverImage } from "@/components/ui/cover-image";
import { IMAGES } from "@/lib/images";
import { mockMeeting } from "@/lib/mock-data";

export function UpcomingMeeting() {
  return (
    <section className="py-2">
      <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
        Upcoming Meeting
      </h2>
      <div className="space-y-4">
        <div className="relative mb-2 aspect-[16/10] overflow-hidden rounded-lg bg-surface-container shadow-soft">
          <CoverImage src={IMAGES.dashboardMeeting} alt="Calm backdrop for upcoming IEP meeting" />
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-headline text-2xl text-on-surface">{mockMeeting.title}</h3>
            <span className="shrink-0 text-sm font-bold text-primary">{mockMeeting.dateLabel}</span>
          </div>
          <p className="text-sm text-on-surface-variant">
            {mockMeeting.school} • {mockMeeting.time}
          </p>
        </div>
        <p className="text-sm italic leading-relaxed text-on-surface-variant">{mockMeeting.focus}</p>
        <Link
          href="/sustainbl/prep"
          className="block w-full rounded-lg border border-outline py-3 text-center text-sm font-bold text-on-surface transition-colors hover:bg-surface-container"
        >
          View Prep Kit
        </Link>
      </div>
    </section>
  );
}
