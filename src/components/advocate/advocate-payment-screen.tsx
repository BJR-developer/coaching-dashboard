"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { useAppSession } from "@/components/auth/session-provider";
import { buildSuccessHref, parseBookingParams } from "@/lib/booking";
import { mockSessionBalance } from "@/lib/session-policy";

export function AdvocatePaymentScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { copy } = useAppSession();
  const booking = parseBookingParams(searchParams);
  const price = mockSessionBalance.extraPriceLabel;

  function onPay(e: FormEvent) {
    e.preventDefault();
    router.push(buildSuccessHref(booking));
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="mx-auto max-w-4xl px-8 py-10 md:px-12"
    >
      <Link
        href="/advocate"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-primary"
      >
        <ArrowLeft size={16} />
        Back to {copy.coachNavLabel}
      </Link>

      <h1 className="mb-10 font-headline text-5xl text-on-surface">Payment</h1>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-lowest p-8 shadow-soft">
          <p className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">
            Order summary
          </p>
          <ul className="mb-8 space-y-3 font-body text-on-surface-variant">
            <li>
              <span className="text-on-surface">Date:</span> Sep {booking.day}, 2024
            </li>
            <li>
              <span className="text-on-surface">Time:</span> {booking.time}
            </li>
            <li>
              <span className="text-on-surface">Purpose:</span> {booking.purpose}
            </li>
            <li>
              <span className="text-on-surface">Advocate:</span> Sarah Jenkins
            </li>
          </ul>
          <div className="flex items-baseline justify-between border-t border-outline-variant/40 pt-5">
            <span className="text-lg font-bold text-on-surface">Total</span>
            <span className="font-headline text-4xl text-primary">{price}</span>
          </div>
        </div>

        <form onSubmit={onPay} className="space-y-6 rounded-2xl border border-outline-variant/40 bg-surface-container-low p-8 shadow-soft">
          <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            Card details
          </p>
          <input
            required
            placeholder="Name on card"
            className="w-full border-b border-outline-variant bg-transparent py-3 font-body text-lg outline-none focus:border-primary"
          />
          <input
            required
            inputMode="numeric"
            placeholder="Card number"
            className="w-full border-b border-outline-variant bg-transparent py-3 font-body text-lg outline-none focus:border-primary"
          />
          <div className="grid grid-cols-2 gap-6">
            <input
              required
              placeholder="MM/YY"
              className="w-full border-b border-outline-variant bg-transparent py-3 font-body text-lg outline-none focus:border-primary"
            />
            <input
              required
              placeholder="CVC"
              className="w-full border-b border-outline-variant bg-transparent py-3 font-body text-lg outline-none focus:border-primary"
            />
          </div>
          <p className="flex items-center gap-2 text-xs text-on-surface-variant">
            <Lock size={14} className="text-primary" />
            Secure checkout preview — Stripe wires here later.
          </p>
          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-4 font-bold text-on-primary shadow-soft transition-all hover:opacity-90"
          >
            Pay {price}
          </button>
        </form>
      </div>
    </motion.div>
  );
}
