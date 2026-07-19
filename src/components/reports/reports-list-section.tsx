import Link from "next/link";
import { FileText } from "lucide-react";
import { mockReports } from "@/lib/mock-data";

export function ReportsListSection() {
  return (
    <div className="mx-auto w-full max-w-6xl px-12 py-16">
      <div className="mb-16">
        <h1 className="mb-4 font-display text-5xl tracking-tight text-on-surface">Family Reports</h1>
        <p className="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
          Access and export curated summaries of your child&apos;s progress, IEP highlights, and
          meeting preparation documents.
        </p>
      </div>

      <div className="grid grid-cols-12 border-b border-outline-variant/60 px-4 pb-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant/80">
        <div className="col-span-2">Date</div>
        <div className="col-span-4">Report Name</div>
        <div className="col-span-3">Meeting Reference</div>
        <div className="col-span-2">Status</div>
        <div className="col-span-1 text-right">Action</div>
      </div>

      {mockReports.map((r) => (
        <Link
          key={r.id}
          href={`/reports/${r.id}`}
          className="group grid grid-cols-12 cursor-pointer items-center border-b border-outline-variant/30 px-4 py-6 transition-all duration-300 hover:bg-primary/[0.03]"
        >
          <div className="col-span-2 font-body text-on-surface-variant">{r.date}</div>
          <div className="col-span-4">
            <span className="font-headline text-xl text-on-surface transition-colors group-hover:text-primary">
              {r.name}
            </span>
          </div>
          <div className="col-span-3 font-body text-on-surface-variant">{r.meeting}</div>
          <div className="col-span-2">
            <span
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                r.status === "Ready"
                  ? "bg-primary-container text-on-primary-container"
                  : "bg-surface-container-highest text-on-surface-variant"
              }`}
            >
              {r.status}
            </span>
          </div>
          <div className="col-span-1 text-right">
            <FileText
              size={20}
              className="ml-auto text-primary opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
