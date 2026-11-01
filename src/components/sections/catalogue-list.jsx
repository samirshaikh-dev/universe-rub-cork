import Image from "next/image";
import Link from "next/link";

/* Custom gasket silhouettes act as category glyphs. They are line drawings from
   the product itself, not decoration. */
const GLYPHS = {
  "rubberised-cork": <path d="M3 6h18v12H3zM8 10h8v4H8z" />,
  cork: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  "decorative-cork": (
    <>
      <rect height="7" width="7" x="3" y="3" />
      <rect height="7" width="7" x="14" y="3" />
      <rect height="7" width="7" x="3" y="14" />
      <rect height="7" width="7" x="14" y="14" />
    </>
  ),
  "cork-gifts": (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 12h7" />
    </>
  ),
  transformers: (
    <>
      <path d="M4 7h16v10H4z" />
      <path d="M8 11h8v2H8z" />
    </>
  ),
  automotive: <path d="M3 14l2-5h14l2 5v4H3zM7 18v2M17 18v2" />,
  construction: (
    <>
      <path d="M3 20h18M6 20V9l6-4 6 4v11" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  decorative: (
    <>
      <rect height="16" width="16" x="4" y="4" />
      <path d="M4 12h16M12 4v16" />
    </>
  ),
};

function Glyph({ slug }) {
  return (
    <svg
      aria-hidden="true"
      className="size-9 text-montado"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {GLYPHS[slug] ?? GLYPHS["rubberised-cork"]}
    </svg>
  );
}

export default function CatalogueList({ items, basePath, actionLabel, mediaMap }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const href = `/${basePath}/${item.slug}`;
        const media = mediaMap?.[item.slug];

        if (media) {
          return (
            <Link
              className="app-panel aspect-[4/3]"
              href={href}
              key={item.slug}
            >
              <Image
                alt={media.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                src={media.src}
              />
              <span className="app-panel__label">
                <span>{item.name}</span>
                <span aria-hidden="true" className="spec-num text-[0.8rem]">
                  →
                </span>
              </span>
            </Link>
          );
        }

        return (
          <article
            className="flex h-full flex-col border border-montado/20 bg-paper p-6 transition-colors duration-200 ease-standard hover:border-montado/55"
            key={item.slug}
          >
            <div className="mb-6 border-b border-montado/15 pb-5">
              <Glyph slug={item.slug} />
            </div>
            <h2 className="display-sm m-0 mb-3">
              <Link className="no-underline" href={href}>
                {item.name}
              </Link>
            </h2>
            <p className="m-0 mb-6 text-[0.98rem] leading-relaxed text-charcoal">
              {item.summary}
            </p>
            <Link
              aria-label={`${actionLabel}: ${item.name}`}
              className="btn--plain mt-auto self-start text-montado"
              href={href}
            >
              {actionLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        );
      })}
    </div>
  );
}
