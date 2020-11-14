import Date from "./date";
import Link from "next/link";
import { MediaImage } from "types";
import { ImageHeader } from "./image-header";
import { Box, Heading, Link as Uilink, Text } from "theme-ui";

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
    <Box variant="styles.container">
      <ImageHeader title={title} coverImage={coverImage} />
      <Box sx={{ maxWidth: "48em", my: [3, 4, 5], mx: "auto" }}>
        <Heading as="h3">
          <Link href={`/news/${slug}`} passHref>
            <Uilink dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </Heading>

        <Text
          sx={{
            p: 1,
            fontSize: 0,
            color: "darkGrey",
          }}
        >
          <Date dateString={date} />
        </Text>
        <Box dangerouslySetInnerHTML={{ __html: excerpt }} />
      </Box>
    </Box>
  );
}
