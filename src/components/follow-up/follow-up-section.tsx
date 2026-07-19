"use client";

import { useState } from "react";
import { Check, Copy, Save, Send } from "lucide-react";
import { CHILD_NAME } from "@/lib/nav";

export function FollowUpSection() {
  const [copied, setCopied] = useState(false);

  const body = `Dear IEP Team,

Thank you for the productive meeting earlier today. I appreciated the collaborative spirit as we worked together to refine the support plan for ${CHILD_NAME}.

To ensure we are all on the same page regarding the outcomes of today's discussion, I have summarized my understanding of the key agreements and next steps below:`;

  async function copyAll() {
    await navigator.clipboard.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto max-w-4xl px-12 pb-20 pt-8">
      <section className="mb-12">
        <span className="font-label text-xs font-bold uppercase tracking-widest text-tertiary">
          Step 5: Follow-Up
        </span>
        <h1 className="mt-4 font-headline text-5xl leading-tight text-on-background">
          Closing the Loop
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">
          Clear documentation is your best advocacy tool. We&apos;ve drafted this follow-up email
          based on today&apos;s meeting notes to ensure every agreement is honored.
        </p>
      </section>

      <div className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-10 shadow-soft">
        <div className="mb-10 space-y-4">
          <div className="flex items-center border-b border-outline-variant/40 pb-4">
            <span className="w-16 font-label text-sm text-on-surface-variant">To:</span>
            <input
              className="flex-1 border-none bg-transparent font-body text-sm text-on-surface outline-none"
              defaultValue="iep-team@districtschool.edu"
            />
          </div>
          <div className="flex items-center border-b border-outline-variant/40 pb-4">
            <span className="w-16 font-label text-sm text-on-surface-variant">Cc:</span>
            <input
              className="flex-1 border-none bg-transparent font-body text-sm text-on-surface outline-none"
              defaultValue="advocate@sustainbl.com"
            />
          </div>
          <div className="flex items-center border-b border-outline-variant/40 pb-4">
            <span className="w-16 font-label text-sm text-on-surface-variant">Subject:</span>
            <input
              className="flex-1 border-none bg-transparent font-headline text-lg font-semibold text-primary outline-none"
              defaultValue={`IEP Meeting Follow-Up: ${CHILD_NAME} — Agreement Summary & Next Steps`}
            />
          </div>
        </div>

        <div className="space-y-8 font-body leading-relaxed text-on-surface">
          <div className="whitespace-pre-wrap">{body}</div>

          <div className="border-b border-outline-variant/40 pb-6">
            <h3 className="mb-4 font-label text-xs font-bold uppercase tracking-wider text-tertiary">
              Key Agreements Reached
            </h3>
            <ul className="ml-5 list-disc space-y-2">
              <li>Increase specialized literacy instruction from 60 to 90 minutes per week.</li>
              <li>Noise-canceling headset approved for independent work periods.</li>
              <li>Quarterly progress reports will include social-emotional goal data.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-label text-xs font-bold uppercase tracking-wider text-tertiary">
              Next Steps
            </h3>
            <ol className="ml-5 list-decimal space-y-2">
              <li>
                <strong>District:</strong> Finalize the draft IEP and send for signature by Monday.
              </li>
              <li>
                <strong>Parent:</strong> Confirm schedule for the upcoming transition meeting.
              </li>
            </ol>
          </div>

          <div>
            <p>
              If any part of this summary differs from your records, please let me know by Wednesday
              so we can clarify.
            </p>
            <p className="mt-4">Best regards,</p>
            <p className="font-bold">[Parent Name]</p>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-outline-variant/40 pt-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center gap-2 font-label text-sm text-on-surface-variant hover:text-primary"
            >
              <Save size={18} />
              Save Draft
            </button>
            <button
              type="button"
              onClick={copyAll}
              className="flex items-center gap-2 font-label text-sm text-on-surface-variant hover:text-primary"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied" : "Copy to Clipboard"}
            </button>
          </div>
          <button
            type="button"
            className="flex items-center gap-3 rounded-lg bg-primary px-10 py-4 font-bold text-on-primary transition-all active:scale-95"
          >
            Send Email
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
