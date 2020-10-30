import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { MediaImage } from "types";
import { Card, Styled, Link as UiLink, Text } from "theme-ui";

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
      <CoverImage title={title} coverImage={coverImage} slug={slug} />

      <Styled.h3>
        <Link href={`/news/${slug}`} passHref>
          <UiLink sx={{ color: "text"}} dangerouslySetInnerHTML={{ __html: title }}></UiLink>
        </Link>
      </Styled.h3>
      <Text>
        <Date dateString={date} />
      </Text>
      <Text dangerouslySetInnerHTML={{ __html: excerpt }} />
    </Card>
  );
}
