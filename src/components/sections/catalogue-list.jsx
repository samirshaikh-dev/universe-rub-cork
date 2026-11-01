import Image from "next/image";
import Link from "next/link";
import {
  LayersIcon,
  ZapIcon,
  CarIcon,
  BuildingIcon,
  SparklesIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
} from "../ui/icons";

const CATEGORY_ICONS = {
  "rubberised-cork": LayersIcon,
  cork: LayersIcon,
  "decorative-cork": BuildingIcon,
  "cork-gifts": SparklesIcon,
  transformers: ZapIcon,
  automotive: CarIcon,
  construction: BuildingIcon,
};

export default function CatalogueList({ items, basePath, actionLabel = "View Range", mediaMap }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const href = `/${basePath}/${item.slug}`;
        const media = mediaMap?.[item.slug];
        const IconComponent = CATEGORY_ICONS[item.slug] || LayersIcon;

        return (
          <article
            className="bento-card flex h-full flex-col overflow-hidden"
            key={item.slug}
          >
            {/* Visual Header: Photo or Graphic Hero */}
            {media ? (
              <div className="relative aspect-[16/10] overflow-hidden bg-sheet border-b border-montado/10">
                <Image
                  alt={media.alt}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={media.src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="badge-tag badge-tag--dark text-xs backdrop-blur-md">
                    <IconComponent className="size-3.5 text-cork-gold" />
                    <span>{item.name}</span>
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative p-6 pb-4 border-b border-montado/10 bg-gradient-to-br from-sheet via-white to-sheet">
                <div className="flex items-center justify-between">
                  <div className="grid size-12 place-items-center rounded-xl bg-montado/10 text-montado">
                    <IconComponent className="size-6" />
                  </div>
                  <span className="badge-tag text-[0.7rem] bg-montado-subtle text-montado">
                    Manufactured in Vapi
                  </span>
                </div>
              </div>
            )}

            {/* Content Details */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="display-sm m-0 mb-2">
                <Link
                  className="text-charcoal no-underline hover:text-montado transition-colors"
                  href={href}
                >
                  {item.name}
                </Link>
              </h3>

              <p className="m-0 mb-4 text-xs sm:text-sm text-charcoal-light leading-relaxed">
                {item.summary}
              </p>

              {/* Sub-item chips if available */}
              {item.items && item.items.length > 0 && (
                <div className="mb-6 grid gap-1.5 pt-3 border-t border-montado/8">
                  {item.items.map((sub, idx) => (
                    <div
                      className="flex items-start gap-1.5 text-xs text-charcoal-muted"
                      key={idx}
                    >
                      <span className="font-bold text-montado shrink-0">•</span>
                      <span>
                        <strong className="text-charcoal">{sub.name}:</strong>{" "}
                        {sub.details}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Button */}
              <div className="mt-auto pt-4 border-t border-montado/10 flex items-center justify-between">
                <Link
                  aria-label={`${actionLabel}: ${item.name}`}
                  className="btn--plain text-xs font-bold text-montado"
                  href={href}
                >
                  <span>{actionLabel}</span>
                  <ArrowRightIcon className="size-3.5" />
                </Link>

                <Link
                  className="text-xs font-semibold text-cork hover:underline"
                  href="/contact#request-a-quote"
                >
                  Inquire
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
