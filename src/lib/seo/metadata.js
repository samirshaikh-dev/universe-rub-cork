import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../../config/site";

// The root default title is also the home page title: the home route sets no
// page metadata of its own, so this is what it renders. Every other route
// supplies its own title, which the template below suffixes with the brand.
const DEFAULT_TITLE = `${SITE_NAME} | Cork and rubberised cork products`;

export const ROOT_METADATA = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Industrial manufacturing",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Next.js merges route metadata shallowly, so a page that sets `openGraph` or
// `twitter` replaces the root object instead of extending it. The shared fields
// are repeated here so every route keeps its site name, type and card format.
export function createPageMetadata({ title, description, path }) {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      title,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
