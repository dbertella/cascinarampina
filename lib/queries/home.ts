import { fetchAPI } from "lib/api";

export async function getHomePage() {
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
          homeElements {
            homeSlide {
              image {
                sourceUrl(size: LARGE)
                srcSet
                altText
              }
              text
              url
              ctaText
            }
            homeGallery {
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
        id: "homepage",
        idType: "URI",
      },
    }
  );

  return data;
}
