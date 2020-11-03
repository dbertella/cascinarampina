import CoverImage from "../cover-image";
import Link from "next/link";
import { MediaImage } from "types";
import { Card, Styled, Link as UiLink, Text, Box } from "theme-ui";

type Props = {
  title: string;
  coverImage: MediaImage;
  price: string;
  slug: string;
};

export function ProductPreview({ title, coverImage, price, slug }: Props) {
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
          {price}
        </Text>
        <CoverImage
          title={title}
          coverImage={coverImage}
          href={`/products/${slug}`}
        />
      </Box>

      <Styled.h3>
        <Link href={`/products/${slug}`} passHref>
          <UiLink
            sx={{ color: "text" }}
            dangerouslySetInnerHTML={{ __html: title }}
          ></UiLink>
        </Link>
      </Styled.h3>
    </Card>
  );
}
