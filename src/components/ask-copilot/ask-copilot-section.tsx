"use client";

import { useState } from "react";
import { ArrowUp, Lightbulb, Mail, Paperclip, HelpCircle, FileText, Info, Sparkles } from "lucide-react";
import { CHILD_NAME } from "@/lib/nav";

const prompts = [
  { icon: Lightbulb, label: "Explain a goal" },
  { icon: HelpCircle, label: "What should I ask?" },
  { icon: Mail, label: "Draft follow-up email" },
  { icon: FileText, label: "Summarize evaluations" },
];

export function AskCopilotSection() {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto max-w-4xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-headline text-3xl font-semibold">Your SustainBL Assistant</h1>
          <p className="mt-1 font-body italic text-on-surface-variant">
            Grounded in {CHILD_NAME}&apos;s IEP and progress reports
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-outline-variant/20 bg-secondary-container/50 px-4 py-2">
          <Sparkles size={16} className="text-secondary" />
          <span className="font-label text-xs font-semibold text-secondary">Secure Analysis Active</span>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-220px)] flex-col overflow-hidden rounded-xl border border-outline-variant/40 bg-white shadow-soft">
        <div className="flex-1 space-y-12 overflow-y-auto p-10">
          <div className="flex max-w-3xl gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed">
              <Sparkles className="text-primary" size={18} />
            </div>
            <div className="flex-1 pt-1">
              <p className="mb-4 font-headline text-xl leading-relaxed">
                Hello. I&apos;ve finished reviewing the documents in {CHILD_NAME}&apos;s SustainBL.
                I can help you prepare for the upcoming meeting.
              </p>
              <p className="text-on-surface-variant">What would you like to focus on first?</p>
            </div>
          </div>

          <div className="ml-auto flex max-w-3xl flex-row-reverse gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-container-highest">
              <span className="text-xs font-bold text-on-surface-variant">You</span>
            </div>
            <div className="flex-1 pt-1 text-right">
              <div className="inline-block rounded-2xl border border-outline-variant/20 bg-surface-container-low px-6 py-4 text-on-surface">
                Explain the reading intervention goal in plain English.
              </div>
            </div>
          </div>

          <div className="flex max-w-3xl gap-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-fixed">
              <Sparkles className="text-primary" size={18} />
            </div>
            <div className="flex-1 rounded-xl border border-outline-variant/30 bg-surface-bright p-8">
              <h2 className="mb-4 border-b border-outline-variant/40 pb-2 font-headline text-2xl">
                Goal Analysis: Reading Intervention
              </h2>
              <p className="mb-4 text-on-surface/90">
                The goal targets measurable growth in reading fluency and comprehension with
                specialized support minutes each week. In plain English: the school commits to
                structured help so {CHILD_NAME} can catch up toward grade-level reading.
              </p>
              <div className="rounded-lg border-l-4 border-primary bg-primary/5 p-4">
                <p className="text-sm font-semibold text-primary">Key Question for Team:</p>
                <p className="text-sm italic">
                  &ldquo;How will we measure progress each month, and who owns the data?&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-outline-variant/40 bg-surface-container-lowest p-8">
          <div className="mb-6 flex flex-wrap gap-3">
            {prompts.map(({ icon: IconCmp, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => setValue(label)}
                className="flex items-center gap-2 rounded-full border border-outline-variant/60 bg-white px-4 py-2 text-sm font-medium transition-all hover:border-primary hover:text-primary"
              >
                <IconCmp size={12} />
                {label}
              </button>
            ))}
          </div>

          <div className="relative">
            <textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
              rows={2}
              placeholder="Ask anything about the IEP documents..."
              className="min-h-[80px] w-full resize-none rounded-2xl border border-outline-variant bg-white px-6 py-5 pr-24 outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-3">
              <button type="button" className="p-2 text-on-surface-variant hover:text-primary">
                <Paperclip size={18} />
              </button>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-on-primary transition-all active:scale-90"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 opacity-60">
            <Info size={14} className="mt-0.5 shrink-0" />
            <p className="text-[11px] font-semibold uppercase tracking-wider leading-relaxed">
              Disclaimer: SustainBL Copilot helps organize and interpret educational documents. It is
              not a lawyer and does not provide legal advice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
