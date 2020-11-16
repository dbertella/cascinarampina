import { fetchAPI } from "lib";
import { CategorySingle } from "lib/types";

export async function getProductCategory(slug: string) {
  const data: {
    productCategory: CategorySingle;
  } = await fetchAPI(
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
    query ProductCategory($id: ID!) {
      productCategory(id: $id, idType: SLUG) {
        id
        name
        slug
        description
        image {
          id
          sourceUrl
          srcSet
        }
        products(first: 1000) {
          edges {
            cursor
            node {
              ...ProductFields
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

  data.productCategory.canonical = `${process.env.SITE_URL}/categorie-prodotti/${slug}`;

  return data;
}

export async function getAllProductCategoriesWithSlug() {
  const data = await fetchAPI(`
    {
      productCategories(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.productCategories;
}
