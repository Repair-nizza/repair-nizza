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
