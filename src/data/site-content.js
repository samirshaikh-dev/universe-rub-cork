export const PRODUCTS = [
  {
    slug: "rubberised-cork",
    name: "Rubberised cork",
    seoTitle: "Rubberised cork sheets and gaskets",
    summary:
      "Sheets and cut components made to customer requirements or to IS 4253 Part II.",
    introduction:
      "United Rubber Cork supplies rubberised cork sheets, gaskets, frames, strips and washers. Share a drawing or sample to discuss a part made to your requirement.",
    items: [
      {
        name: "Sheets",
        details:
          "1.0 to 20 mm thick. Available in 2 ft x 3 ft, 3 ft x 3 ft and 1000 x 1000 mm sizes.",
      },
      {
        name: "Strips",
        details:
          "20 to 600 mm wide and 1 to 10 mm thick. Contact United Rubber Cork with your required dimensions.",
      },
      {
        name: "Gaskets, frames and washers",
        details:
          "Made to a customer drawing or sample, or to IS 4253 Part II.",
      },
    ],
  },
  {
    slug: "cork",
    name: "Cork",
    seoTitle: "Cork sheets, granules and gaskets",
    summary:
      "Cork sheets and rolls, rings, gaskets, granules and other cork products.",
    introduction:
      "The cork range includes sheets and rolls, rings and gaskets, polishing wheels, granules, anti-vibration slabs, Battricork and stoppers.",
    items: [
      {
        name: "Cork granules",
        details: "Mesh sizes: 0.2/0.5, 0.5/1, 1/2, 3/4 and 4/8 mm.",
      },
      {
        name: "Sheets, rolls, rings and gaskets",
        details:
          "Share your required size, thickness and application for current availability.",
      },
      {
        name: "Other cork products",
        details:
          "Polishing wheels, anti-vibration slabs, Battricork and stoppers. Specifications are available on request.",
      },
    ],
  },
  {
    slug: "decorative-cork",
    name: "Decorative cork",
    seoTitle: "Decorative cork tiles and memo boards",
    summary: "Cork tiles and memo boards for decorative applications.",
    introduction:
      "Decorative cork tiles are available in two documented face sizes. Contact United Rubber Cork to confirm the finish and current availability.",
    items: [
      {
        name: "Tiles",
        details:
          "300 x 300 mm and 600 x 600 mm sizes; 3 to 12 mm thick.",
      },
      {
        name: "Memo boards",
        details: "Contact United Rubber Cork with the required dimensions and quantity.",
      },
    ],
  },
  {
    slug: "cork-gifts",
    name: "Cork gifts",
    seoTitle: "Cork gifts by enquiry",
    summary: "Cork gift products available by enquiry.",
    introduction:
      "Ask United Rubber Cork about the current cork gift range, sizes and available quantities.",
    items: [],
  },
];

export const INDUSTRIES = [
  {
    slug: "transformers",
    name: "Transformers",
    seoTitle: "Rubberised cork for transformers",
    summary:
      "Rubberised cork gaskets and strips for transformer manufacturers.",
    body:
      "United Rubber Cork supplies rubberised cork strips and makes gaskets to a customer drawing or sample. Share the required width, thickness, dimensions and standard so the specification can be reviewed.",
    productSlugs: ["rubberised-cork"],
    specifications: [
      ["Rubberised cork strips", "20 to 600 mm wide; 1 to 10 mm thick"],
      ["Rubberised cork sheets", "1.0 to 20 mm thick"],
      ["Manufacturing basis", "Customer drawing or sample; IS 4253 Part II"],
    ],
  },
  {
    slug: "automotive",
    name: "Automotive",
    seoTitle: "Rubberised cork gaskets for automotive",
    summary: "Rubberised cork gaskets made to a drawing or sample.",
    body:
      "United Rubber Cork makes rubberised cork gaskets for automotive component applications. Send a drawing or sample with the required material and dimensions for a specification discussion.",
    productSlugs: ["rubberised-cork"],
    specifications: [
      ["Relevant products", "Rubberised cork gaskets, frames and washers"],
      ["Manufacturing basis", "Customer drawing or sample"],
    ],
  },
  {
    slug: "construction",
    name: "Construction and insulation",
    seoTitle: "Cork for construction and insulation",
    summary: "Cork sheets, granules and slabs for construction enquiries.",
    body:
      "United Rubber Cork's cork range includes sheets, granules and anti-vibration slabs. Share the application and required dimensions to check which product is suitable.",
    productSlugs: ["cork"],
    specifications: [
      ["Cork granules", "0.2/0.5, 0.5/1, 1/2, 3/4 and 4/8 mm meshes"],
      ["Other products", "Sheets, rolls and anti-vibration slabs"],
    ],
  },
];

export const ROUTES = [
  "/",
  "/products",
  "/industries",
  ...PRODUCTS.map((product) => `/products/${product.slug}`),
  ...INDUSTRIES.map((industry) => `/industries/${industry.slug}`),
  "/quality",
  "/about",
  "/contact",
  "/request-quote",
  "/privacy",
];
