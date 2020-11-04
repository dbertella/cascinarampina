import { fetchAPI } from "lib/api";
import { CateogryListItem } from "lib/types";

export async function getProductCategories() {
  const data: {
    productCategories: {
      edges: CateogryListItem[];
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
