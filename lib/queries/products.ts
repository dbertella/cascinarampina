import { fetchAPI } from "lib/api";
import { CateogryListItem } from "lib/types";

export async function getProducts() {
  const data: {
    products: {
      edges: CateogryListItem[];
    };
  } = await fetchAPI(
    `
    fragment ProductFields on Product {
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
    query Products {
      products(first: 1000) {
        edges {
          cursor
          node {
            ...ProductFields
          }
        }
      }
    }
    `
  );

  return data;
}
