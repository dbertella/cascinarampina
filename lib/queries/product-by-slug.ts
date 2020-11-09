import { fetchAPI } from "lib";
import { ProductSingle } from "lib/types";

export async function getProductBySlug(slug: string) {
  const data: { product: ProductSingle } = await fetchAPI(
    `
      fragment ProductListFields on Product {
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
      
      fragment ProductSingle on Product {
        id
        averageRating
        description
        shortDescription
        type
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
              ...ProductListFields
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
        name
        slug
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
          ...ProductSingle
        }
      }
    `,
    {
      variables: {
        id: slug,
      },
    }
  );

  data.product.seo.canonical =
    data.product.seo.canonical || `${process.env.SITE_URL}/prodotti/${slug}`;

  return data;
}
