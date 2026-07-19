"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Lock, Upload } from "lucide-react";
import { motion } from "framer-motion";
import { CoverImage } from "@/components/ui/cover-image";
import { IMAGES } from "@/lib/images";

export function SetupDocumentation() {
  const router = useRouter();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-8 py-10 md:px-12 md:py-14 lg:flex-row lg:gap-14">
      <div className="flex flex-col lg:w-2/5">
        <div className="mb-8">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-primary">
            Step 3 of 3
          </span>
          <h1 className="mb-4 font-display text-4xl leading-tight text-on-background md:text-5xl">
            The Documentation
          </h1>
          <p className="font-body leading-relaxed text-on-surface-variant">
            Upload your latest IEP or evaluation report to begin building your advocacy dashboard.
          </p>
        </div>
        <div className="relative mb-6 hidden aspect-[4/5] overflow-hidden rounded-2xl border border-outline-variant/40 shadow-soft lg:block">
          <CoverImage src={IMAGES.setupDocs} alt="Organized documents and folder" />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/30 to-transparent" />
        </div>
        <div className="flex items-center gap-6 text-on-surface-variant/60">
          <div className="flex items-center gap-2">
            <Lock size={14} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Private by Design</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="lg:w-3/5"
      >
        <div className="rounded-[2rem] border border-outline-variant/60 bg-white/40 p-8 shadow-soft backdrop-blur-sm md:p-10">
          <label className="block cursor-pointer rounded-3xl border-2 border-dashed border-outline-variant/40 bg-surface-container-low/50 p-10 text-center transition-all hover:border-primary/40 hover:bg-surface-container/60">
            <input type="file" className="hidden" accept=".pdf,image/*" />
            <div className="mb-5 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Upload size={28} />
              </div>
            </div>
            <h2 className="mb-2 font-headline text-2xl text-on-surface">Upload IEP Draft</h2>
            <p className="mx-auto max-w-xs font-body text-sm text-on-surface-variant">
              Drag and drop your PDF, or{" "}
              <span className="font-semibold text-primary underline underline-offset-4">
                browse files
              </span>
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-widest text-on-surface-variant/50">
              Maximum file size: 25MB
            </p>
          </label>

          <div className="mt-8 space-y-5">
            {[
              {
                title: "Digital or Scanned",
                body: "We accept PDFs, high-quality JPGs, or document scans from your phone.",
              },
              {
                title: "Frontend preview",
                body: "Upload is visual only in this prototype — no backend storage yet.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant/60">
                  <Check size={12} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-on-surface">{item.title}</h3>
                  <p className="mt-1 text-xs text-on-surface-variant">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col-reverse items-center justify-between gap-6 sm:flex-row">
            <button
              type="button"
              onClick={() => router.push("/setup/milestone")}
              className="flex items-center gap-2 text-sm font-semibold text-on-surface-variant hover:text-primary"
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button
              type="button"
              onClick={() => router.push("/dashboard")}
              className="w-full rounded-xl bg-primary px-10 py-4 font-bold text-on-primary shadow-soft sm:w-auto"
            >
              Complete Setup
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
