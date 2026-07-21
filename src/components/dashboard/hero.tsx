"use client";

import { useAppSession } from "@/components/auth/session-provider";
import { PageHeader } from "@/components/layout/page-shell";
import { useDashboardData } from "@/lib/portal/client/use-dashboard-data";

export function DashboardHero() {
  const { displayName } = useAppSession();
  const { data } = useDashboardData();
  const parentName = data?.parentName || displayName || null;
  const studentName = data?.iepProfile?.childName || data?.studentName || null;
  const studentGrade = data?.iepProfile?.gradeLevel || null;
  const studentDistrict = data?.iepProfile?.schoolDistrict || null;

  return (
    <PageHeader
      eyebrow="Overview"
      title={<>Welcome back, {displayName}.</>}
      description={
        <div className="space-y-1.5">
          <p>
            {studentName
              ? `Your advocacy journey continues. Here is the current status of ${studentName}'s IEP and upcoming milestones.`
              : "Your advocacy journey continues. Here is the current status of your IEP and upcoming milestones."}
          </p>
          <p>
            <span className="font-semibold text-on-surface">Parent account:</span>{" "}
            {parentName || "Not set"}{" "}
            <span className="mx-2 text-outline">|</span>
            <span className="font-semibold text-on-surface">Student:</span>{" "}
            {studentName || "Not set"}
            {studentGrade ? ` · ${studentGrade}` : ""}
            {studentDistrict ? ` · ${studentDistrict}` : ""}
          </p>
        </div>
      }
    />
  );
}
