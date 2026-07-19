import Link from "next/link";
import { MapPin, Video } from "lucide-react";
import { mockMeetings } from "@/lib/mock-data";

export function MeetingHistorySection() {
  return (
    <div className="px-12 pb-24 pt-8">
      <header className="mx-auto max-w-5xl pb-12 pt-8">
        <h1 className="mb-4 font-headline text-5xl text-on-surface">Meetings</h1>
        <p className="max-w-xl font-body leading-relaxed text-on-surface-variant/80">
          A chronological record of your advocacy journey. Review past decisions, access generated
          summaries, and track commitments made during educational meetings.
        </p>
      </header>

      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-12 border-b border-outline-variant/30 px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/60">
          <div className="col-span-2">Date</div>
          <div className="col-span-5">Meeting Title</div>
          <div className="col-span-3">Location</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        {mockMeetings.map((m) => (
          <Link
            key={m.id}
            href={`/meetings/${m.id}`}
            className="group grid grid-cols-12 cursor-pointer items-center border-b border-outline-variant/30 px-6 py-10 transition-all duration-300 hover:bg-surface-container-low"
          >
            <div className="col-span-2 font-body text-sm text-on-surface-variant">{m.date}</div>
            <div className="col-span-5">
              <h2 className="font-headline text-2xl text-on-surface transition-colors group-hover:text-primary">
                {m.title}
              </h2>
            </div>
            <div className="col-span-3 flex items-center gap-2 font-body text-sm text-on-surface-variant">
              {m.location.includes("Virtual") ? (
                <Video size={16} className="opacity-40" />
              ) : (
                <MapPin size={16} className="opacity-40" />
              )}
              {m.location}
            </div>
            <div className="col-span-2 text-right">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                  m.statusTone === "primary"
                    ? "bg-primary-container/20 text-on-primary-fixed-variant"
                    : "bg-secondary-container/50 text-secondary"
                }`}
              >
                {m.statusTone === "primary" ? (
                  <span className="h-1 w-1 animate-pulse rounded-full bg-primary" />
                ) : null}
                {m.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
