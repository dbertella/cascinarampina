import { fetchAPI } from "lib";
import { ProductSingle } from "lib/types";

export async function getProductBySlug(slug: string) {
  const data: { product: ProductSingle } = await fetchAPI(
    `
      fragment ProductFields on Product {
        name
        slug
        seo {
          canonical
          title
          metaDesc
        }
        image {
          sourceUrl(size: LARGE)
          srcSet
        }
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
          description
          shortDescription
          type
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
          related(first: 5) {
            edges {
              node {
                ...ProductFields
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

  console.log("canonical pre:", data.product.seo.canonical);

  data.product.seo.canonical =
    data.product.seo.canonical || `${process.env.SITE_URL}/prodotti/${slug}`;

  return data;
}
