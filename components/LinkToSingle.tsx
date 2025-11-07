import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Text, Link } from "./ui";
import { MediaImage } from "types";
import styles from "./link-to-single.module.css";

export const LinkToSingle = ({
  image,
  title,
  href,
  galleryImages,
}: {
  image?: MediaImage;
  galleryImages?: { nodes: MediaImage[] };
  title: string;
  href: string;
}) => (
  <Link href={href} className={styles.link}>
      <Image
        className={styles.image}
        src={
          galleryImages?.nodes?.[0]?.sourceUrl ??
          image?.sourceUrl ??
          PLACEHOLDER_IMAGE
        }
        srcSet={galleryImages?.nodes?.[0]?.srcSet ?? image?.srcSet}
      />
      {galleryImages && (
        <Image
          className={styles.hoverImage}
          src={galleryImages?.nodes?.[1]?.sourceUrl}
          srcSet={galleryImages?.nodes?.[1]?.srcSet}
        />
      )}
      <Text className={styles.title}>
        {title}
      </Text>
    </Link>
  );
