"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BOOKING_PURPOSES, BOOKING_TIMES, buildPaymentHref } from "@/lib/booking";
import { mockSessionBalance } from "@/lib/session-policy";

const DAYS = [
  { d: "26", muted: true },
  { d: "27", muted: true },
  { d: "28", muted: true },
  { d: "29", muted: true },
  { d: "30", muted: true },
  { d: "1" },
  { d: "2" },
  { d: "3" },
  { d: "4" },
  { d: "5" },
  { d: "6", accent: true },
  { d: "7" },
  { d: "8" },
  { d: "9" },
  { d: "10" },
  { d: "11" },
  { d: "12" },
  { d: "13" },
  { d: "14" },
  { d: "15" },
  { d: "16" },
];

export function AdvocateBookingPanel() {
  const router = useRouter();
  const bal = mockSessionBalance;
  const [selectedDay, setSelectedDay] = useState("11");
  const [time, setTime] = useState<string>(BOOKING_TIMES[1]);
  const [purpose, setPurpose] = useState<string>(BOOKING_PURPOSES[0]);

  function onConfirmBook() {
    router.push(buildPaymentHref({ day: selectedDay, time, purpose }));
  }

  return (
    <div className="rounded-2xl border border-outline-variant/40 bg-surface-container-low p-8 shadow-soft">
      <div className="mb-6 flex items-start justify-between gap-4">
        <h2 className="font-headline text-3xl text-on-surface">Book a Meeting</h2>
        <p className="shrink-0 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
          {bal.remaining} of {bal.total} sessions left
        </p>
      </div>

      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-bold text-on-surface">September 2024</span>
          <div className="flex space-x-2">
            <button type="button" className="rounded-full p-1 hover:bg-surface-variant">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="rounded-full p-1 hover:bg-surface-variant">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="mb-2 grid grid-cols-7 gap-2 text-center text-xs font-bold text-outline">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={`${d}-${i}`}>{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-sm">
          {DAYS.map((day, i) => {
            const selectable = !day.muted;
            const selected = selectedDay === day.d && selectable;
            return (
              <button
                key={`${day.d}-${i}`}
                type="button"
                disabled={!selectable}
                onClick={() => setSelectedDay(day.d)}
                className={`p-2 transition-colors ${
                  selected
                    ? "rounded-lg bg-primary font-bold text-on-primary shadow-soft"
                    : day.accent
                      ? "rounded-lg bg-primary/10 font-bold text-primary"
                      : day.muted
                        ? "cursor-default text-outline/40"
                        : "rounded-lg hover:bg-surface-variant"
                }`}
              >
                {day.d}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-5 space-y-4">
        <div>
          <label
            htmlFor="meeting-time"
            className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant"
          >
            Time
          </label>
          <select
            id="meeting-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface outline-none focus:border-primary"
          >
            {BOOKING_TIMES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="meeting-purpose"
            className="mb-2 block text-xs font-bold uppercase tracking-widest text-on-surface-variant"
          >
            Purpose / reason
          </label>
          <select
            id="meeting-purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="w-full rounded-lg border border-outline-variant/60 bg-surface-container-lowest px-4 py-3 font-body text-sm text-on-surface outline-none focus:border-primary"
          >
            {BOOKING_PURPOSES.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={onConfirmBook}
        className="w-full rounded-xl bg-primary py-4 font-bold text-on-primary shadow-soft transition-all hover:bg-primary-container hover:text-on-primary-container"
      >
        Confirm Schedule
      </button>
    </div>
  );
}
