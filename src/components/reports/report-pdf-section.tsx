"use client";

import Link from "next/link";
import { ArrowLeft, Download, Printer } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";

export function ReportPdfSection({ id }: { id: string }) {
  return (
    <div>
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-outline-variant/40 bg-background/80 px-12 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <Link
            href="/reports"
            className="flex items-center gap-2 font-label font-medium text-on-surface-variant hover:text-primary"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
          <div className="h-4 w-px bg-outline-variant" />
          <h1 className="text-sm font-bold uppercase tracking-tight text-primary">Report Viewer</h1>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-bold text-on-primary shadow-soft"
        >
          <Download size={16} />
          Download PDF
        </button>
      </header>

      <main className="px-12 py-8">
        <article className="relative mx-auto min-h-[1100px] max-w-[850px] border border-outline-variant/30 bg-white p-16 shadow-soft">
          <div className="mb-12 flex items-end justify-between border-b-[3px] border-primary pb-8">
            <div>
              <p className="mb-2 font-label text-xs font-bold uppercase tracking-widest text-primary">
                Official Synthesis Report
              </p>
              <h2 className="mb-2 font-headline text-5xl leading-none text-on-surface md:text-6xl">
                Annual IEP Review Analysis
              </h2>
              <p className="font-label text-sm italic text-on-surface-variant">
                Case Reference: {id.toUpperCase()} • Facilitated by SustainBL
              </p>
            </div>
            <div className="text-right">
              <p className="font-label font-bold text-on-surface">August 24, 2024</p>
              <p className="font-label text-xs uppercase tracking-tighter text-on-surface-variant">
                Issue Date
              </p>
            </div>
          </div>

          <section className="mb-16">
            <div className="flex items-start gap-8">
              <div className="w-1/3">
                <h3 className="border-l-2 border-primary-container pl-4 font-headline text-2xl italic text-primary">
                  Executive Summary
                </h3>
              </div>
              <div className="w-2/3">
                <p className="font-body leading-relaxed text-on-surface first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-5xl first-letter:text-primary">
                  This document synthesizes the recent IEP meeting regarding student progress and
                  placement. The primary focus was reconciling developmental benchmarks with
                  classroom performance and aligning therapeutic supports for the upcoming year.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h3 className="mb-8 font-headline text-3xl text-on-surface">Key Outcomes</h3>
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "Reading Comprehension",
                  body: "Achieved 85% mastery identifying main themes, exceeding the 70% target.",
                },
                {
                  title: "Self-Regulation",
                  body: "Successfully used sensory cool-down zones in 4 of 5 prompted instances.",
                },
                {
                  title: "Social Interaction",
                  body: "Initiated play with peers in 3 structured activities without immediate adult help.",
                },
                {
                  title: "Written Expression",
                  body: "Refinement needed in multi-paragraph structure; assistive typing recommended.",
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-primary bg-surface-container-low p-6">
                  <h4 className="mb-2 font-label font-bold text-on-surface">{item.title}</h4>
                  <p className="font-body text-sm leading-snug text-on-surface-variant">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <footer className="mt-20 flex items-center justify-between border-t border-outline-variant/40 pt-12 font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            <div>Page 01 of 03</div>
            <div className="flex items-center gap-2">
              <BrandLogo href={undefined} size="sm" />
              <span>Digital IEP Governance Platform</span>
            </div>
            <div>ID: #882-XJ99-2024</div>
          </footer>
        </article>

        <button
          type="button"
          onClick={() => window.print()}
          className="fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center rounded-full bg-on-surface text-surface shadow-soft transition-transform hover:scale-110"
          aria-label="Print"
        >
          <Printer size={20} />
        </button>
      </main>
    </div>
  );
}
