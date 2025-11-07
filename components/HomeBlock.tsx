import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Link, Flex, Button } from "./ui";
import { MediaImage } from "types";
import PostBody from "components/post-body";
import styles from "./home-block.module.css";

export const HomeBlock = ({
  image,
  content,
  href,
  even,
  ctaText,
}: {
  image?: MediaImage;
  content: string;
  href: string;
  even: boolean;
  ctaText?: string;
}) => (
  <Flex className={styles.container} data-direction={even ? "row" : "reverse"}>
    <Link href={href} className={styles.imageLink}>
      <Image
        className={styles.image}
        src={image?.sourceUrl ?? PLACEHOLDER_IMAGE}
        srcSet={image?.srcSet}
      />
    </Link>
    <Flex className={styles.content}>
      <PostBody content={content} />
      {ctaText && (
        <Link href={href}>
          <Button className={styles.button} variant="outline">
            {ctaText}
          </Button>
        </Link>
      )}
    </Flex>
  </Flex>
);
