import Date from "./date";
import { MediaImage } from "types";
import { ImageHeader } from "./image-header";
import { Box, Heading, Link, Text } from "./ui";
import styles from "./hero-post.module.css";

type Props = {
  title: string;
  coverImage?: MediaImage;
  date: string;
  excerpt: string;
  slug: string;
};

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Box>
      <ImageHeader title="News" coverImage={coverImage} />
      <Box className={styles.container}>
        <Heading as="h3">
          <Link
            href={`/news/${slug}`}
            className={styles.titleLink}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Heading>

        <Text className={styles.date}>
          <Date dateString={date} />
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Box>
    </Box>
  );
}
