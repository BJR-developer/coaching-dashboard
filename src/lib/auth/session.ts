import { cache } from "react";
import { createClient } from "@/lib/supabase/server";
import {
  resolvePortalTheme,
  resolveServiceType,
  type PortalTheme,
  type ServiceType,
} from "@/lib/auth/service-type";

export type AppSession = {
  userId: string;
  email: string;
  displayName: string;
  serviceType: ServiceType;
  theme: PortalTheme;
};

export const getAppSession = cache(async (): Promise<AppSession | null> => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("email, name, first_name, last_name, service_type")
    .eq("id", user.id)
    .maybeSingle();

  const serviceType = resolveServiceType(profile?.service_type);
  const displayName =
    profile?.name?.trim() ||
    [profile?.first_name, profile?.last_name].filter(Boolean).join(" ").trim() ||
    user.email?.split("@")[0] ||
    "Member";

  return {
    userId: user.id,
    email: profile?.email || user.email || "",
    displayName,
    serviceType,
    theme: resolvePortalTheme(serviceType),
  };
});
