/** Official Aegis project inbox. May be overridden at deployment if the address changes. */
export const contactEmail = (
  process.env.NEXT_PUBLIC_AEGIS_CONTACT_EMAIL || "connect.aegisforge@gmail.com"
).trim();

export const contactHref = `mailto:${contactEmail}?subject=${encodeURIComponent("Hello Aegis Forge")}`;
