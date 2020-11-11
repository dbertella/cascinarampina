/** @jsxRuntime classic */
/** @jsx jsx */
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { MediaImage } from "types";
import { Card, Styled, Link as UiLink, Text, Box, jsx } from "theme-ui";

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
      <Box sx={{ position: "relative", height: [150, null, 200] }}>
        <Text
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            p: 1,
            fontSize: 0,
            bg: "muted",
            zIndex: 1,
          }}
        >
          <Date dateString={date} />
        </Text>
        <CoverImage
          title={title}
          coverImage={coverImage}
          href={`/news/${slug}`}
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            verticalAlign: "bottom",
          }}
        />
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
