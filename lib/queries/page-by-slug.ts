import { fetchAPI } from "lib";
import pages from "../pages.json";

export async function getPageByUri(slug: string) {
  const data = await fetchAPI(
    `
      fragment PageFields on Page {
        title
        slug
        date
        seo {
          canonical
          title
          metaDesc
        }
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet
          }
        }
      }
      query PageBySlug($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          ...PageFields
          content
          pageElements {
            pageGallery {
              image {
                sourceUrl(size: GALLERY_SIZE)
                thumb: sourceUrl(size: THUMBNAIL)
                srcSet
                altText
              }
            }
          }
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                  srcSet
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  // This is to find the correct url for child pages
  const uri = pages.find((p) => p.includes(slug));

  data.page.seo.canonical =
    data.page.seo.canonical || `${process.env.SITE_URL}${uri}`;

  return data;
}

export async function getPageAndChildrensByUri(slug: string) {
  const data = await fetchAPI(
    `
      fragment PageFields on Page {
        title
        slug
        date
        seo {
          canonical
          title
          metaDesc
        }
        featuredImage {
          node {
            sourceUrl(size: LARGE)
            srcSet
          }
        }
      }
      query PageBySlug($id: ID!, $idType: PageIdType!) {
        page(id: $id, idType: $idType) {
          ...PageFields
          content
          children(where: {orderby: {field: TITLE, order: ASC}}) {
            nodes {
              slug
              ... on Page {
                id
                title
                featuredImage {
                  node {
                    sourceUrl(size: MEDIUM)
                    srcSet
                  }
                }
              }
            }
          }
        }
        posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              slug
              date
              featuredImage {
                node {
                  sourceUrl(size: LARGE)
                  srcSet
                }
              }
            }
          }
        }
      }
    `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  data.page.seo.canonical =
    data.page.seo.canonical || `${process.env.SITE_URL}/${slug}`;

  return data;
}
