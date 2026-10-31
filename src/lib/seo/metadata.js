import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../../config/site";

export const ROOT_METADATA = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AMCORK Industries | Cork and rubberised cork products",
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
    title: "AMCORK Industries | Cork and rubberised cork products",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: "AMCORK Industries | Cork and rubberised cork products",
    description: SITE_DESCRIPTION,
  },
};

export function createPageMetadata({ title, description, path }) {
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url },
    twitter: { title, description },
  };
}
