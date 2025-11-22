export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "en",
          title: "English",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "fr",
          title: "French",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (doc) => doc?.title?.en || doc?.title?.ru || "untitled",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^\w\-]+/g, "")
            .replace(/\-\-+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description (for service card)",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
          rows: 3,
        },
        {
          name: "en",
          title: "English",
          type: "text",
          rows: 3,
        },
        {
          name: "fr",
          title: "French",
          type: "text",
          rows: 3,
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "fullDescription",
      title: "Full Description",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
          rows: 8,
        },
        {
          name: "en",
          title: "English",
          type: "text",
          rows: 8,
        },
        {
          name: "fr",
          title: "French",
          type: "text",
          rows: 8,
        },
      ],
    },
    {
      name: "image1",
      title: "Service Image 1",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image2",
      title: "Service Image 2",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "process",
      title: "Process",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
          rows: 4,
        },
        {
          name: "en",
          title: "English",
          type: "text",
          rows: 4,
        },
        {
          name: "fr",
          title: "French",
          type: "text",
          rows: 4,
        },
      ],
    },
    {
      name: "pros",
      title: "Pros / Advantages",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
          rows: 4,
        },
        {
          name: "en",
          title: "English",
          type: "text",
          rows: 4,
        },
        {
          name: "fr",
          title: "French",
          type: "text",
          rows: 4,
        },
      ],
    },
    {
      name: "additionalInfo",
      title: "Additional Information",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
          rows: 4,
        },
        {
          name: "en",
          title: "English",
          type: "text",
          rows: 4,
        },
        {
          name: "fr",
          title: "French",
          type: "text",
          rows: 4,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title.en",
      subtitle: "shortDescription.en",
      media: "image1",
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || "Untitled Service",
        subtitle: subtitle || "No description",
        media,
      };
    },
  },
};

