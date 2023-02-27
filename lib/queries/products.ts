import { fetchAPI } from "lib";
import { CategoryListItem } from "lib";

export async function getProducts() {
  const data: {
    products: {
      edges: CategoryListItem[];
    };
  } = await fetchAPI(`
    fragment ProductListFields on Product {
      name
      slug
      image {
        sourceUrl(size: LARGE)
        srcSet
      }
      galleryImages {
        nodes {
          id
          sourceUrl(size: LARGE)
          srcSet
          altText
          title
        }
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
            ...ProductListFields
          }
        }
      }
    }
  `);

  return data;
}

export async function getAllProductsWithSlug() {
  const data = await fetchAPI(`
    query AllProducts {
      products(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.products;
}
