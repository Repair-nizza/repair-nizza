export default {
  name: "heroBlurCard",
  title: "Hero Blur Card",
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
        },
        {
          name: "en",
          title: "English",
          type: "string",
        },
        {
          name: "fr",
          title: "French",
          type: "string",
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "text",
        },
        {
          name: "en",
          title: "English",
          type: "text",
        },
        {
          name: "fr",
          title: "French",
          type: "text",
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "object",
      fields: [
        {
          name: "ru",
          title: "Russian",
          type: "string",
        },
        {
          name: "en",
          title: "English",
          type: "string",
        },
        {
          name: "fr",
          title: "French",
          type: "string",
        },
      ],
    },
    {
      name: "imageMobile",
      title: "Mobile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "imageDesktop",
      title: "Desktop Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
