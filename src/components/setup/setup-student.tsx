"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CoverImage } from "@/components/ui/cover-image";
import { IMAGES } from "@/lib/images";

export function SetupStudent() {
  const router = useRouter();
  const [name, setName] = useState("");

  return (
    <div className="flex flex-1 items-center justify-center px-8 py-10 md:px-12 md:py-14">
      <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="order-2 max-w-lg lg:order-1"
        >
          <div className="mb-8">
            <span className="mb-2 block font-body text-sm font-semibold uppercase tracking-widest text-primary">
              Step 1 of 3
            </span>
            <h1 className="font-headline text-5xl leading-tight text-on-background md:text-6xl">
              The Student
            </h1>
          </div>
          <form
            className="space-y-8"
            onSubmit={(e) => {
              e.preventDefault();
              router.push("/setup/milestone");
            }}
          >
            <div className="space-y-3">
              <label
                htmlFor="child-name"
                className="font-body text-sm uppercase tracking-wider text-on-surface-variant"
              >
                Preferred Name
              </label>
              <input
                id="child-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter their name here..."
                className="w-full border-b border-outline-variant bg-transparent py-3 font-headline text-3xl text-on-background outline-none placeholder:text-outline-variant/60 focus:border-primary md:text-4xl"
              />
              <p className="font-body text-xs italic text-on-surface-variant/60">
                We&apos;ll use this name throughout your advocacy journey and IEP preparations.
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <button
                type="submit"
                className="group flex items-center gap-3 rounded-lg bg-primary px-10 py-4 font-body text-base font-bold text-on-primary shadow-soft transition-all active:scale-95"
              >
                Continue
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => router.push("/setup/milestone")}
                className="font-body text-sm text-on-surface-variant underline-offset-4 hover:text-on-surface hover:underline"
              >
                Skip for now
              </button>
            </div>
          </form>
        </motion.div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-soft">
            <CoverImage src={IMAGES.setupStudent} alt="Parent and child — advocacy journey" priority />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-outline-variant/20 bg-surface/85 p-4 backdrop-blur-md">
              <p className="mb-1 font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                Your Organizer
              </p>
              <p className="font-headline text-lg leading-tight text-on-surface">
                A calm home for your child&apos;s educational history.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
