import { ROUTES } from "../data/site-content";
import { SITE_URL } from "../config/site";

const LAST_CONTENT_REVIEW = new Date("2026-10-31T00:00:00.000Z");

export default function sitemap() {
  return ROUTES.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: LAST_CONTENT_REVIEW,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
