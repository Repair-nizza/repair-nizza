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
    _createdAt,
    isLatestProject
  } | order(_createdAt desc)
`;

export const servicesQuery = `
  *[_type == "service"] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription {
      ru,
      en,
      fr
    },
    cardImage {
      asset-> {
        _id,
        url
      }
    },
    gallery[] {
      asset-> {
        _id,
        url
      }
    },
    process,
    pros,
    additionalInfo,
    order,
    _createdAt
  } | order(coalesce(order, 9999) asc, _createdAt desc)
`;

export const serviceBySlugQuery = `
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    fullDescription {
      ru,
      en,
      fr
    },
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
    },
    infoImage {
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
    process,
    pros,
    additionalInfo
  }
`;