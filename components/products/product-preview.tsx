import CoverImage from "../cover-image";
import Link from "next/link";
import { MediaImage } from "types";
import { Card, Link as UiLink, Text, Box } from "theme-ui";

type Props = {
  title: string;
  coverImage: MediaImage;
  price: string;
  slug: string;
};

export function ProductPreview({ title, coverImage, price, slug }: Props) {
  return (
    <Card>
      <Box sx={{ position: "relative", width: "fit-content", m: "auto" }}>
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
          href={`/prodotti/${slug}`}
        />
      </Box>

      <Link href={`/prodotti/${slug}`} passHref>
        <UiLink
          sx={{ color: "text" }}
          dangerouslySetInnerHTML={{ __html: title }}
        ></UiLink>
      </Link>
    </Card>
  );
}
