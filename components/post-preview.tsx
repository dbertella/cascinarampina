import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { MediaImage } from "types";
import { Card, Styled, Link as UiLink, Text, Box } from "theme-ui";

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
    <Card>
      <Box sx={{ position: "relative" }}>
        <Text
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 1,
            fontSize: 0,
            bg: "muted",
          }}
        >
          <Date dateString={date} />
        </Text>
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </Box>

      <Styled.h3>
        <Link href={`/news/${slug}`} passHref>
          <UiLink
            sx={{ color: "text" }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></UiLink>
        </Link>
      </Styled.h3>

      <Text dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Card>
  );
}
