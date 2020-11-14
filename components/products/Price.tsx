import React from "react";
import { Text } from "theme-ui";

export const ProductPrice = ({
  onSale,
  regularPrice,
  price,
  type,
}: ProductPrice) => {
  if (onSale) {
    return type === "VARIABLE" ? (
      <Text>{price}</Text>
    ) : (
      <Text>
        <Text as="span" sx={{ color: "lightGrey", ml: 2 }}>
          {regularPrice}
        </Text>
        {price}
      </Text>
    );
  }
  return <Text sx={{ fontSize: 4, fontFamily: "monospace" }}>{price}</Text>;
};
type ProductPrice = {
  price: string;
  regularPrice?: string;
  salePrice?: string;
  onSale?: boolean;
  type?: "VARIABLE" | string;
};
ProductPrice.defaultProps = {
  price: "Free",
  regularPrice: "Free",
  salePrice: "Free",
  onSale: false,
};
export default ProductPrice;
