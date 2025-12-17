export const heroBlurCardQuery = `
  *[_type == "project" && isLatestProject == true][0] {
    _id,
    title,
    subtitle,
    mainImage {
      asset->
    },
    slug
  }
`;

export const portfolioProjectsQuery = `
  *[_type == "project"] {
    _id,
    title,
    subtitle,
    mainImage {
      asset->
    },
    mobileMainImage {
      asset->
    },
    _createdAt,
    isLatestProject
  } | order(_createdAt desc)
`;

export const servicesQuery = `
  *[_type == "service"] {
    _id,
    title,
    slug,
    description {
      ru,
      en,
      fr
    },
    "gallery": gallery | order(coalesce(order, 9999) asc)[0] {
      image {
        asset-> {
          _id,
          url
        }
      },
      order
    },
    process {
      ru,
      en,
      fr
    },
    pros {
      ru,
      en,
      fr
    },
    additionalInfo {
      ru,
      en,
      fr
    },
    order,
    _createdAt
  } | order(coalesce(order, 9999) asc, _createdAt desc)
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description {
      ru,
      en,
      fr
    },
    gallery[] {
      image {
        asset-> {
          _id,
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      },
      order
    } | order(coalesce(order, 9999) asc),
    process {
      ru,
      en,
      fr
    },
    pros {
      ru,
      en,
      fr
    },
    additionalInfo {
      ru,
      en,
      fr
    }
  }
`;

export const blogsQuery = `
  *[_type == "blog"] {
    _id,
    title,
    subtitle,
    slug,
    mainImage {
      asset-> {
        _id,
        url
      }
    },
    readTime,
    date,
    _createdAt
  } | order(date desc, _createdAt desc)
`;

export const blogBySlugQuery = `
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title,
    subtitle,
    slug,
    date,
    readTime,
    mainImage {
      asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    content,
    gallery[] {
      asset-> {
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    }
  }
`;
