import { AskCopilotTeaser } from "@/components/dashboard/ask-copilot-teaser";
import { DashboardHero } from "@/components/dashboard/hero";
import { PriorityAction } from "@/components/dashboard/priority-action";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { UpcomingMeeting } from "@/components/dashboard/upcoming-meeting";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl px-8 py-8 md:px-12 md:py-10">
      <DashboardHero />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
        <div className="space-y-6 md:col-span-7">
          <PriorityAction />
          <RecentActivity />
        </div>
        <div className="md:col-span-5">
          <UpcomingMeeting />
        </div>
      </div>
      <AskCopilotTeaser />
    </div>
  );
}
