import CoverImage from "../cover-image";
import { MediaImage } from "types";
import { Card, Link, Text, Box } from "components/ui";
import styles from "./product-preview.module.css";

type Props = {
  title: string;
  coverImage: MediaImage;
  price: string;
  slug: string;
};

export function ProductPreview({ title, coverImage, price, slug }: Props) {
  return (
    <Card>
      <Box className={styles.imageContainer}>
        <Text className={styles.priceBadge}>
          {price}
        </Text>
        <CoverImage
          title={title}
          coverImage={coverImage}
          href={`/prodotti/${slug}`}
        />
      </Box>

      <Link
        href={`/prodotti/${slug}`}
        className={styles.titleLink}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </Card>
  );
}
