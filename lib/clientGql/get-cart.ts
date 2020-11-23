import { fetchAPI } from "lib";

export async function getCart() {
  const data = await fetchAPI(
    `
      query GetCart {
        cart {
          contents {
            nodes {
              key
              product {
                id
                name
                description
                type
                onSale
                slug
                averageRating
                reviewCount
                image {
                  sourceUrl
                  srcSet
                  altText
                }
              }
              variation {
                id
                name
                description
                type
                onSale
                price
                regularPrice
                salePrice
                image {
                  id
                  sourceUrl
                  srcSet
                  altText
                  title
                }
                attributes {
                  nodes {
                    id
                    name
                    value
                  }
                }
              }
              quantity
              total
              subtotal
              subtotalTax
            }
          }
          appliedCoupons {
            nodes {
              id
              discountType
              amount
              dateExpiry
              products {
                nodes {
                  id
                }
              }
              productCategories {
                nodes {
                  id
                }
              }
            }
          }
          subtotal
          subtotalTax
          shippingTax
          shippingTotal
          total
          totalTax
          feeTax
          feeTotal
          discountTax
          discountTotal
        }
      }
    `
  );

  return data;
}
