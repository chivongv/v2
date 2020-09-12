export default {
  name: "figure",
  type: "image",
  title: "Image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for SEO and accessiblity.",
      options: {
        isHighlighted: true,
      },
    },
    {
      name: "caption",
      title: "Caption text",
      type: "string",
    },
  ],
  preview: {
    select: {
      imageUrl: "asset.url",
      title: "caption",
    },
  },
}
