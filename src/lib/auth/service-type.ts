export type ServiceType = "iep" | "coaching" | "vaclaims";

/** Portal theme — VA Claims uses the same auth system; brand UI maps it to coaching. */
export type PortalTheme = "iep" | "coaching";

export function resolveServiceType(raw: string | null | undefined): ServiceType {
  const value = (raw || "vaclaims").toLowerCase().trim();
  if (value === "coaching") return "coaching";
  if (value === "iep" || value === "iep-services" || value === "advocacy") return "iep";
  return "vaclaims";
}

export function resolvePortalTheme(serviceType: ServiceType): PortalTheme {
  return serviceType === "iep" ? "iep" : "coaching";
}

export function isPortalServiceType(value: string): value is PortalTheme {
  return value === "iep" || value === "coaching";
}

export const SERVICE_COPY: Record<
  PortalTheme,
  {
    tagline: string;
    coachNavLabel: string;
    coachNoun: string;
    programLabel: string;
  }
> = {
  iep: {
    tagline: "IEP Parent Journey",
    coachNavLabel: "My Advocate",
    coachNoun: "advocate",
    programLabel: "IEP Services",
  },
  coaching: {
    tagline: "Coaching Journey",
    coachNavLabel: "My Coach",
    coachNoun: "coach",
    programLabel: "Life Coaching",
  },
};
