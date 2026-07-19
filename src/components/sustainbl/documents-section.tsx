import { Download, Eye, Plus } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import { CHILD_NAME } from "@/lib/nav";
import { mockDocuments, mockMeeting } from "@/lib/mock-data";

export function DocumentsSection() {
  return (
    <div className="px-12 pb-12 pt-8">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <nav className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-on-surface-variant/60">
            <span>{CHILD_NAME}&apos;s SustainBL</span>
            <Icon name="chevron" size={12} />
            <span className="text-primary/80">Documents</span>
          </nav>
          <h1 className="font-headline text-5xl font-normal text-on-surface">Digital Binder</h1>
        </div>
        <button
          type="button"
          className="flex items-center gap-3 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-on-primary shadow-soft transition-all active:scale-95"
        >
          <Plus size={18} />
          Upload File
        </button>
      </div>

      <div className="mb-16 grid grid-cols-12 gap-6">
        <div className="col-span-8 flex items-center justify-between rounded-xl bg-surface-container-low p-8">
          <div className="flex gap-12">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Total Files
              </p>
              <p className="font-headline text-3xl">24</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Signed
              </p>
              <p className="font-headline text-3xl text-primary">18</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                Action Required
              </p>
              <p className="font-headline text-3xl text-tertiary">3</p>
            </div>
          </div>
        </div>
        <div className="relative col-span-4 cursor-pointer overflow-hidden rounded-xl bg-primary-container p-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-on-primary-container/80">
            Upcoming Meeting
          </p>
          <p className="mb-4 font-headline text-2xl leading-tight text-on-primary-container">
            Annual IEP Review
            <br />
            {mockMeeting.fullDate}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 border-b border-outline-variant/30 px-6 pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant/50">
        <div className="col-span-6">Document Name</div>
        <div className="col-span-2 text-center">Category</div>
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-2 text-right">Added</div>
      </div>

      {mockDocuments.map((doc) => (
        <div
          key={doc.name}
          className="group relative cursor-pointer border-b border-outline-variant/20 px-6 py-8 transition-colors hover:bg-surface-container"
        >
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-6 flex items-center gap-5">
              <div className="flex h-12 w-12 items-center justify-center rounded bg-background text-primary/40 transition-colors group-hover:text-primary">
                <Icon name="file-text" size={28} />
              </div>
              <div>
                <h3 className="font-headline text-lg font-medium text-on-surface transition-colors group-hover:text-primary">
                  {doc.name}
                </h3>
                <p className="text-sm font-light italic text-on-surface-variant">{doc.detail}</p>
              </div>
            </div>
            <div className="col-span-2 text-center">
              <span className="rounded-full bg-surface-variant px-3 py-1 text-xs font-medium text-on-surface-variant">
                {doc.category}
              </span>
            </div>
            <div className="col-span-2 text-center">
              <span
                className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest ${
                  doc.statusTone === "tertiary" ? "text-tertiary" : "text-secondary"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    doc.statusTone === "tertiary" ? "bg-tertiary" : "bg-secondary"
                  }`}
                />
                {doc.status}
              </span>
            </div>
            <div className="col-span-2 text-right text-sm font-light text-on-surface-variant">
              {doc.added}
            </div>
          </div>
          <div className="absolute right-6 top-1/2 flex -translate-y-1/2 gap-2 opacity-0 transition-opacity group-hover:opacity-100">
            <button type="button" className="rounded-full p-2 text-on-surface-variant hover:bg-white">
              <Eye size={18} />
            </button>
            <button type="button" className="rounded-full p-2 text-on-surface-variant hover:bg-white">
              <Download size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
