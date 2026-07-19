"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useAppSession } from "@/components/auth/session-provider";
import { parseBookingParams } from "@/lib/booking";

const REDIRECT_SECONDS = 5;

export function AdvocateSuccessScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { copy } = useAppSession();
  const booking = parseBookingParams(searchParams);
  const [seconds, setSeconds] = useState(REDIRECT_SECONDS);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(tick);
  }, []);

  useEffect(() => {
    if (seconds > 0) return;
    router.replace("/advocate");
  }, [seconds, router]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-8 py-16 text-center"
    >
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-fixed text-primary">
        <CheckCircle2 size={32} />
      </div>
      <h1 className="mb-3 font-headline text-5xl text-on-surface">Meeting booked</h1>
      <p className="mb-2 font-body text-lg text-on-surface-variant">
        Sep {booking.day}, 2024 at {booking.time}
      </p>
      <p className="mb-10 text-on-surface-variant">{booking.purpose} with Sarah Jenkins</p>

      <p className="mb-6 text-sm text-on-surface-variant">
        Returning to {copy.coachNavLabel} in{" "}
        <span className="font-bold text-primary">{seconds}</span>…
      </p>

      <Link
        href="/advocate"
        className="rounded-xl bg-primary px-8 py-4 font-bold text-on-primary shadow-soft"
      >
        Back to {copy.coachNavLabel}
      </Link>
    </motion.div>
  );
}
