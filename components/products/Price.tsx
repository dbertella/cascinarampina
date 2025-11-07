import { Text } from "../ui";
import styles from "./Price.module.css";

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
        <Text as="span" className={styles.regularPrice}>
          {regularPrice}
        </Text>
        {price}
      </Text>
    );
  }
  return <Text className={styles.price}>{price}</Text>;
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
