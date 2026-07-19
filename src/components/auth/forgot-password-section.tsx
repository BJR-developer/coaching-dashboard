"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export function ForgotPasswordSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="relative hidden h-[600px] overflow-hidden rounded-xl bg-surface-container-low lg:col-span-6 lg:block">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-surface/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-fixed-dim/40 via-surface-container to-secondary-container" />
          <div className="absolute bottom-12 left-12 z-20 max-w-xs">
            <p className="font-headline text-3xl italic leading-snug text-on-surface">
              &ldquo;Finding your way back — one step at a time.&rdquo;
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:col-span-6 lg:items-start lg:text-left">
          <div className="w-full max-w-md">
            <h1 className="mb-4 font-headline text-4xl leading-tight tracking-tight text-on-surface md:text-5xl lg:text-6xl">
              Reset your password
            </h1>
            <p className="mb-12 font-body text-lg leading-relaxed text-on-surface-variant">
              Enter your email address and we&apos;ll send you a link to get back into your account.
            </p>

            <form className="space-y-10" onSubmit={onSubmit}>
              <div className="group relative border-b border-outline-variant/60 transition-all duration-300 focus-within:border-primary">
                <label
                  htmlFor="email"
                  className="mb-2 block font-label text-xs uppercase tracking-widest text-on-surface-variant transition-colors group-focus-within:text-primary"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="block w-full border-none bg-transparent px-0 py-4 font-body text-xl text-on-surface outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-8 py-5 font-body text-lg font-semibold tracking-wide text-on-primary shadow-soft transition-all duration-300 hover:bg-on-primary-fixed-variant active:scale-[0.98]"
              >
                Send Reset Link
              </button>
            </form>

            <div className="mt-10 flex items-center justify-center gap-2 lg:justify-start">
              <ArrowLeft size={14} className="text-on-surface-variant" />
              <Link
                href="/sign-in"
                className="font-body text-sm text-on-surface-variant underline underline-offset-4 transition-colors hover:text-primary"
              >
                Back to sign-in
              </Link>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {sent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-surface/95 backdrop-blur-sm"
          >
            <div className="max-w-md p-12 text-center">
              <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary-fixed">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <h2 className="mb-4 font-headline text-3xl text-on-surface">Link Sent</h2>
              <p className="mb-10 font-body text-on-surface-variant">
                We&apos;ve sent a recovery link to your email. Please check your inbox and follow
                the instructions to reset your password.
              </p>
              <div className="flex flex-col items-center gap-3">
                <Link
                  href="/update-password"
                  className="font-body font-bold text-primary hover:underline"
                >
                  Continue to set new password
                </Link>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="font-body text-sm text-on-surface-variant hover:underline"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
