import { fetchAPI } from "lib/api";
import { ProductSingle } from "lib/types";
import { produce } from "immer";
import { sampleSize } from "lodash";

export async function getProductBySlug(slug: string) {
  const data: { product: ProductSingle } = await fetchAPI(
    `
      fragment ProductFields on Product {
        ... on SimpleProduct {
          onSale
          price
          id
        }
        ... on VariableProduct {
          onSale
          price
          id
        }
        ... on ExternalProduct {
          onSale
          price
          id
          externalUrl
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                id
                price
                onSale
              }
            }
          }
          id
        }
      }

      query Product($id: ID!) {
        product(id: $id, idType: SLUG) {
          id
          averageRating
          slug
          description
          type
          image {
            id
            uri
            title
            srcSet
            sourceUrl
          }
          name
          ...ProductFields
          productTypes {
            edges {
              node {
                name
                slug
              }
            }
          }
          productTags {
            edges {
              cursor
              node {
                name
                slug
              }
            }
          }
          productCategories {
            edges {
              node {
                name
                slug
                image {
                  sourceUrl(size: LARGE)
                  srcSet
                }
                products(first: 10) {
                  edges {
                    node {
                      name
                      slug
                      image {
                        sourceUrl(size: LARGE)
                        srcSet
                      }
                      ...ProductFields
                    }
                  }
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
      },
    }
  );

  return produce(data, (draft) => {
    // Filter out the main post
    draft.product.productCategories.edges[0].node.products.edges = draft.product.productCategories.edges[0].node.products.edges.filter(
      ({ node }) => node.slug !== slug
    );
    // If there are still 3 productCategories, remove the last one

    draft.product.productCategories.edges[0].node.products.edges = sampleSize(
      draft.product.productCategories.edges[0].node.products.edges,
      5
    );
  });
}
