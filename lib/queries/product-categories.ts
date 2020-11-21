import { fetchAPI } from "lib";
import { CategoryListItem } from "lib";

export async function getProductCategories() {
  const data: {
    productCategories: {
      edges: CategoryListItem[];
    };
  } = await fetchAPI(
    `
    query ProductCategories {
      productCategories {
        edges {
          cursor
          node {
            id
            name
            slug
            description
            image {
              id
              sourceUrl(size: LARGE)
              srcSet
            }
          }
        }
      }
    }
    `
  );

  return data;
}
