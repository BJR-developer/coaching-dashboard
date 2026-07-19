import { SustainblTabs } from "@/components/layout/sustainbl-tabs";

export default function SustainblLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="px-12 pt-8">
        <SustainblTabs />
      </div>
      {children}
    </div>
  );
}
