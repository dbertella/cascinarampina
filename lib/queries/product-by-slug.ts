import { fetchAPI } from "lib/api";
import { ProductFields } from "lib/types";

export async function getProductBySlug(
  slug?: string
): Promise<{ product: ProductFields }> {
  const data = await fetchAPI(
    `
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
                }
                products(first: 4) {
                  edges {
                    node {
                      name
                      slug
                      date
                      image {
                        sourceUrl(size: LARGE)
                      }
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

  return data;
}
