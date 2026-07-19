import { CHILD_NAME } from "@/lib/nav";

export function DashboardHero() {
  return (
    <header className="mb-8">
      <div className="flex flex-col gap-3 border-b border-outline-variant/20 pb-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Overview</span>
        <h1 className="font-headline text-4xl font-normal leading-tight text-on-surface md:text-5xl">
          Welcome back,
          <br />
          {CHILD_NAME}&apos;s Parent.
        </h1>
        <p className="max-w-2xl font-body text-base text-on-surface-variant md:text-lg">
          Your advocacy journey continues. Here is the current status of {CHILD_NAME}&apos;s IEP
          and upcoming milestones.
        </p>
      </div>
    </header>
  );
}
