// Brand identity. United Rubber Cork, GIDC, Vapi, Gujarat.
//
// Open item: SITE_URL and both mailbox addresses are carried over from the
// previous brand and are not yet confirmed for United Rubber Cork. Replace them
// when the new domain, DNS and mailboxes are supplied. See technical-docs/PLAN.md.
export const SITE_NAME = "United Rubber Cork";

// The wordmark is set on two lines in the header and footer.
export const BRAND_WORDMARK = {
  primary: "United",
  secondary: "Rubber Cork",
};

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.amcorkindia.com";

export const SITE_DESCRIPTION =
  "Cork and rubberised cork products made for industrial, construction and decorative applications.";

export const COMPANY_ADDRESS = {
  streetAddress:
    "No. 5, Balaji Complex, Opp. Hansa Engg. Compound, Near Mahakali Weight Bridge, 2nd Phase, GIDC",
  addressLocality: "Vapi",
  postalCode: "396195",
  addressRegion: "Gujarat",
  addressCountry: "IN",
};

export const COMPANY_EMAILS = [
  "admin@amcorkindia.com",
  "amcorkindustries@gmail.com",
];

export const COMPANY_PHONES = [
  { display: "+91 99243 04617", href: "+919924304617" },
  { display: "+91 99243 04618", href: "+919924304618" },
  { display: "+91 99243 04619", href: "+919924304619" },
];

export const NAV_ITEMS = [
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Quality", href: "/quality" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
