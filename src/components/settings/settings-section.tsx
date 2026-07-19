"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Key, Shield } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";

function Toggle({
  checked,
  onChange,
  id,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-12 rounded-full transition-colors ${
        checked ? "bg-primary-fixed" : "bg-surface-container-high"
      }`}
    >
      <span
        className={`absolute top-0 h-6 w-6 rounded-full border-2 transition-all ${
          checked
            ? "right-0 border-primary bg-primary"
            : "left-0 border-outline-variant bg-white"
        }`}
      />
    </button>
  );
}

export function SettingsSection() {
  const [meetings, setMeetings] = useState(true);
  const [docs, setDocs] = useState(true);
  const [messages, setMessages] = useState(false);

  return (
    <div className="mx-auto w-full max-w-3xl space-y-24 px-12 py-12">
      <div className="mb-4">
        <h1 className="font-headline text-3xl font-semibold tracking-tight text-on-surface">
          Settings
        </h1>
      </div>

      <section className="space-y-8" id="profile">
        <div className="flex items-end justify-between border-b border-outline-variant/40 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Profile Settings</h2>
          <button type="button" className="text-sm font-semibold text-primary hover:underline">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Full Name
            </span>
            <p className="text-lg font-medium text-on-surface">Avery&apos;s Parent</p>
          </div>
          <div>
            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Email Address
            </span>
            <p className="text-lg font-medium text-on-surface">parent@sustainbl.io</p>
          </div>
          <div>
            <span className="mb-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
              Phone Number
            </span>
            <p className="text-lg font-medium text-on-surface">+1 (555) 234-5678</p>
          </div>
        </div>
      </section>

      <section className="space-y-8" id="notifications">
        <div className="border-b border-outline-variant/40 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Notification Preferences</h2>
          <p className="mt-1 text-sm text-on-surface-variant">
            Manage how you receive updates about your child&apos;s progress.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between py-2">
            <div className="max-w-md">
              <p className="font-medium text-on-surface">Meeting Reminders</p>
              <p className="text-sm text-on-surface-variant">
                Get notified 24 hours and 1 hour before scheduled IEP meetings.
              </p>
            </div>
            <Toggle id="toggle-meetings" checked={meetings} onChange={setMeetings} />
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant/20 pt-6">
            <div className="max-w-md">
              <p className="font-medium text-on-surface">Document Updates</p>
              <p className="text-sm text-on-surface-variant">
                Instant alerts when new IEP drafts or school reports are uploaded.
              </p>
            </div>
            <Toggle id="toggle-docs" checked={docs} onChange={setDocs} />
          </div>
          <div className="flex items-center justify-between border-t border-outline-variant/20 pt-6">
            <div className="max-w-md">
              <p className="font-medium text-on-surface">Advocate Messages</p>
              <p className="text-sm text-on-surface-variant">
                Push notifications when your assigned advocate sends a message.
              </p>
            </div>
            <Toggle id="toggle-messages" checked={messages} onChange={setMessages} />
          </div>
        </div>
      </section>

      <section className="space-y-8" id="security">
        <div className="border-b border-outline-variant/40 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Account & Security</h2>
        </div>
        <div className="space-y-2">
          <Link
            href="/update-password"
            className="group flex w-full items-center justify-between rounded-xl p-4 transition-all hover:bg-surface-variant"
          >
            <div className="flex items-center gap-4">
              <Key className="text-primary" size={20} />
              <span className="font-medium">Change Password</span>
            </div>
            <ChevronRight className="text-outline transition-transform group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            className="group flex w-full items-center justify-between rounded-xl p-4 transition-all hover:bg-surface-variant"
          >
            <div className="flex items-center gap-4">
              <Shield className="text-primary" size={20} />
              <div className="text-left">
                <span className="block font-medium">Two-Factor Authentication</span>
                <span className="text-xs text-tertiary">Currently Disabled</span>
              </div>
            </div>
            <ChevronRight className="text-outline transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      <section className="space-y-8 pb-24" id="support">
        <div className="border-b border-outline-variant/40 pb-4">
          <h2 className="font-headline text-2xl text-on-surface">Support & Legal</h2>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <BrandLogo href="/" size="sm" />
          <p className="text-xs text-on-surface-variant/60">
            SustainBL Frontend Prototype
            <br />© 2026 SustainBL. Design preview — no backend connected.
          </p>
        </div>
      </section>
    </div>
  );
}
