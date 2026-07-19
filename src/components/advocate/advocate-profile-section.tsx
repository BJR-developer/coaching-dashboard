"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BadgeCheck, Mail, MessageCircle, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSession } from "@/components/auth/session-provider";
import { AdvocateBookingPanel } from "@/components/advocate/advocate-booking-panel";
import { IMAGES } from "@/lib/images";
import { mockMeetings } from "@/lib/mock-data";

export function AdvocateProfileSection() {
  const [messageOpen, setMessageOpen] = useState(false);
  const { theme, copy } = useAppSession();
  const roleTitle =
    theme === "iep" ? "Senior Parent Advocate" : "Certified Professional Coach";
  const quote =
    theme === "iep"
      ? "Empowering families to navigate the IEP journey with confidence, ensuring every child's unique needs are met with dignity and precision."
      : "Clear goals, responsive support, and lasting habits — coaching that meets you between the sessions that matter.";

  return (
    <div className="mx-auto max-w-6xl px-12 pb-12 pt-8">
      <div className="mb-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <div className="flex flex-col space-y-8 lg:col-span-7">
          <div className="flex items-start space-x-8">
            <div className="relative">
              <div className="relative h-64 w-48 overflow-hidden rounded-xl bg-surface-container shadow-soft">
                <Image
                  src={IMAGES.advocatePortrait}
                  alt={`Sarah Jenkins, ${roleTitle}`}
                  fill
                  className="object-cover object-top"
                  sizes="192px"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-primary p-3 text-on-primary shadow-soft">
                <BadgeCheck size={20} />
              </div>
            </div>
            <div className="flex-1 pt-4">
              <span className="mb-2 block font-label text-xs font-bold uppercase tracking-widest text-primary">
                {roleTitle}
              </span>
              <h1 className="mb-4 font-headline text-5xl leading-tight text-on-surface">
                Sarah Jenkins
              </h1>
              <p className="font-body text-lg italic leading-relaxed text-on-surface-variant">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="mt-3 font-label text-xs uppercase tracking-widest text-on-surface-variant">
                {copy.programLabel}
              </p>
            </div>
          </div>

          <div className="border-t border-outline-variant/60 pt-8">
            <h2 className="mb-4 font-headline text-2xl text-on-surface">Expertise & Empathy</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <h3 className="font-label text-sm font-bold uppercase text-primary">
                  Specialization
                </h3>
                <p className="text-on-surface-variant">
                  Neurodiversity, Speech Pathology, & Transition Planning.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-label text-sm font-bold uppercase text-primary">
                  Years of Service
                </h3>
                <p className="text-on-surface-variant">
                  14 Years advocating for public school equity.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:sarah.j@sustainbl.com"
                className="flex items-center gap-2 rounded-lg border border-outline-variant px-5 py-2.5 text-sm text-on-surface-variant transition-all hover:bg-surface-variant/30"
              >
                <Mail size={16} />
                sarah.j@sustainbl.com
              </a>
              <a
                href="tel:+15553214455"
                className="flex items-center gap-2 rounded-lg border border-outline-variant px-5 py-2.5 text-sm text-on-surface-variant transition-all hover:bg-surface-variant/30"
              >
                <Phone size={16} />
                +1 (555) 321-4455
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <AdvocateBookingPanel />
        </div>
      </div>

      <section className="border-t border-outline-variant/60 pt-16">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <h2 className="mb-2 font-headline text-4xl text-on-surface">Collaboration History</h2>
            <p className="font-body text-on-surface-variant">
              Past meetings with Sarah — summaries from your work together.
            </p>
          </div>
          <Link
            href="/meetings"
            className="shrink-0 border-b border-primary pb-1 font-bold text-primary transition-all hover:border-b-2"
          >
            View all meetings
          </Link>
        </div>

        <div className="space-y-0">
          {mockMeetings.map((meeting, index) => {
            const last = index === mockMeetings.length - 1;
            return (
              <div key={meeting.id} className="flex">
                <div className="mr-12 flex flex-col items-center">
                  <div
                    className={`mt-2 h-3 w-3 rounded-full ${
                      meeting.statusTone === "primary"
                        ? "bg-primary"
                        : "border-2 border-primary bg-background"
                    }`}
                  />
                  {!last ? <div className="my-2 w-px flex-1 bg-outline-variant/60" /> : null}
                </div>
                <div className="flex-1 pb-12">
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <span
                        className={`mb-1 block font-label text-xs font-bold uppercase ${
                          meeting.statusTone === "primary" ? "text-primary" : "text-tertiary"
                        }`}
                      >
                        {meeting.status}
                      </span>
                      <h3 className="mb-2 font-headline text-2xl text-on-surface">
                        {meeting.title}
                      </h3>
                      <p className="max-w-xl leading-relaxed text-on-surface-variant">
                        {meeting.summary}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className="block text-sm font-bold text-on-surface">{meeting.date}</span>
                      <Link
                        href={`/meetings/${meeting.id}`}
                        className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
                      >
                        View details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="pointer-events-none fixed bottom-8 right-8 z-40 flex flex-col items-end space-y-4">
        <AnimatePresence>
          {messageOpen ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              className="pointer-events-auto max-w-xs rounded-2xl border border-outline-variant bg-surface-bright p-4 shadow-soft"
            >
              <p className="mb-3 text-sm italic text-on-surface-variant">
                &ldquo;Hi Sarah, I just received the new draft. Could we chat briefly tomorrow?&rdquo;
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setMessageOpen(false)}
                  className="text-xs font-bold text-outline"
                >
                  Cancel
                </button>
                <button type="button" className="text-xs font-bold text-primary">
                  Send
                </button>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
        <button
          type="button"
          onClick={() => setMessageOpen((v) => !v)}
          className="pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform hover:rotate-12 active:scale-90"
          aria-label="Quick message"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  );
}
