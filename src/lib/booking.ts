export const BOOKING_TIMES = [
  "9:00 AM",
  "10:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
] as const;

export const BOOKING_PURPOSES = [
  "IEP Draft Review",
  "Pre-meeting prep",
  "Progress check-in",
  "Accommodations question",
  "Other",
] as const;

export type BookingDraft = {
  day: string;
  time: string;
  purpose: string;
};

export function buildPaymentHref(draft: BookingDraft) {
  const params = new URLSearchParams({
    day: draft.day,
    time: draft.time,
    purpose: draft.purpose,
  });
  return `/advocate/payment?${params.toString()}`;
}

export function buildSuccessHref(draft: BookingDraft) {
  const params = new URLSearchParams({
    day: draft.day,
    time: draft.time,
    purpose: draft.purpose,
  });
  return `/advocate/success?${params.toString()}`;
}

export function parseBookingParams(searchParams: URLSearchParams): BookingDraft {
  return {
    day: searchParams.get("day") || "11",
    time: searchParams.get("time") || BOOKING_TIMES[1],
    purpose: searchParams.get("purpose") || BOOKING_PURPOSES[0],
  };
}
