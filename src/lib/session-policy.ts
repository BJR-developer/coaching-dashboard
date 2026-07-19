/**
 * Attendance / session rules from Adriana (therapy & coaching).
 * Applied in UI copy for booking, cancel, and session balance.
 */
export const SESSION_POLICY = {
  title: "Session & cancellation policy",
  rules: [
    "Cancel at least 24 hours before your appointment to keep your session.",
    "Same-day cancellation counts as a no-show and uses one session.",
    "A no-show (missed appointment) uses one session.",
  ],
  finePrint:
    "Cancellations without 24-hour notice may result in a fee or be counted as a no-show and will deduct from your session balance.",
  buyExtraLabel: "Purchase extra session",
  buyExtraNote: "You can buy additional sessions anytime when your balance is low.",
} as const;

export const mockSessionBalance = {
  packageLabel: "Coaching — 8 Session Package",
  total: 8,
  used: 3,
  remaining: 5,
  /** Sessions used due to no-show / late cancel */
  forfeited: 1,
  extraPriceLabel: "$197",
};
