import Date from "./date";
import CoverImage from "./cover-image";
import { MediaImage } from "types";
import {
  Card,
  Styled,
  Link,
  Text,
  Box,
  Button,
  Flex,
} from "./ui";
import styles from "./post-preview.module.css";

type Props = {
  title: string;
  coverImage: MediaImage;
  date: string;
  excerpt: string;
  slug: string;
};

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) {
  return (
    <Card className={styles.card}>
      <Box className={styles.imageContainer}>
        <Text className={styles.dateBadge}>
          <Date dateString={date} />
        </Text>
        <CoverImage
          title={title}
          coverImage={coverImage}
          href={`/news/${slug}`}
          className={styles.coverImage}
        />
      </Box>

      <Styled.h3>
        <Link
          href={`/news/${slug}`}
          className={styles.titleLink}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Styled.h3>

      <Text className={styles.excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
      <Flex className={styles.buttonContainer}>
        <Link href={`/news/${slug}`}>
          <Button variant="outline">Leggi di più</Button>
        </Link>
      </Flex>
    </Card>
  );
}
