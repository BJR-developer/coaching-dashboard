"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { CoverImage } from "@/components/ui/cover-image";
import { IMAGES } from "@/lib/images";

export function SetupMilestone() {
  const router = useRouter();

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-6 py-10 md:py-14">
      <div className="grid w-full max-w-5xl items-center gap-10 md:grid-cols-2 lg:gap-16">
        <div className="relative order-2 md:order-1">
          <div className="relative aspect-square overflow-hidden rounded-2xl border-4 border-white/50 shadow-soft">
            <CoverImage src={IMAGES.setupMilestone} alt="IEP planning and education materials" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/25 to-transparent" />
          </div>
          <div className="absolute -bottom-4 -right-2 hidden rounded-xl border border-outline-variant/20 bg-white p-4 shadow-soft lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-fixed">
                <Calendar className="text-primary" size={16} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Priority
                </p>
                <p className="font-headline text-sm font-semibold">Annual Review</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="order-1 flex flex-col md:order-2"
        >
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="font-body text-sm font-bold uppercase tracking-wider text-primary">
                Onboarding
              </span>
              <span className="h-px w-8 bg-outline-variant" />
              <span className="font-body text-sm text-on-surface-variant">Step 2 of 3</span>
            </div>
            <h1 className="mb-3 font-headline text-4xl leading-tight text-on-background lg:text-5xl">
              The Next Milestone
            </h1>
            <p className="max-w-md font-body leading-relaxed text-on-surface-variant">
              Effective advocacy begins with planning. Mark the calendar for your next meeting so we
              can start building your strategy today.
            </p>
          </div>

          <div className="mb-8 flex h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
            <div className="h-full w-1/3 bg-outline-variant" />
            <div className="h-full w-1/3 bg-primary" />
            <div className="h-full w-1/3 bg-surface-container" />
          </div>

          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/setup/documentation");
            }}
          >
            <div>
              <label className="mb-3 block font-headline text-xl text-on-background">
                When is your next meeting?
              </label>
              <input
                type="date"
                className="w-full border-b-2 border-outline-variant/60 bg-transparent pb-2 font-body text-lg text-on-surface outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block font-headline text-xl text-on-background">
                What type of meeting is it?
              </label>
              <select className="w-full appearance-none border-b-2 border-outline-variant/60 bg-transparent pb-2 font-body text-lg text-on-surface outline-none focus:border-primary">
                <option value="">Select meeting type</option>
                <option>Annual IEP Review</option>
                <option>Initial Eligibility</option>
                <option>Triennial Re-evaluation</option>
                <option>Amended IEP Meeting</option>
                <option>504 Plan Meeting</option>
              </select>
            </div>
            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => router.push("/setup")}
                className="flex items-center gap-2 px-4 py-2 font-body font-medium text-on-surface-variant hover:text-primary"
              >
                <ArrowLeft size={18} />
                Back
              </button>
              <button
                type="submit"
                className="flex items-center gap-3 rounded-lg bg-primary px-8 py-3.5 font-body text-base font-bold text-on-primary shadow-soft"
              >
                Continue
                <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
