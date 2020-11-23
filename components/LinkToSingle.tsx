import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Text, Link } from "theme-ui";
import NextLink from "next/link";
import { MediaImage } from "types";

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
  <NextLink href={href} passHref>
    <Link
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        textDecoration: "none",
        height: 300,
        "&:hover .hover-img": {
          display: "block",
        },
      }}
    >
      <Image
        sx={{
          position: "absolute",
          zIndex: -1,
          height: "100%",
          width: "100%",
          objectFit: "cover",
          verticalAlign: "bottom",
        }}
        src={
          galleryImages?.nodes?.[0]?.sourceUrl ??
          image?.sourceUrl ??
          PLACEHOLDER_IMAGE
        }
        srcSet={galleryImages?.nodes?.[0]?.srcSet ?? image?.srcSet}
      />
      {galleryImages && (
        <Image
          sx={{
            position: "absolute",
            zIndex: -1,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            verticalAlign: "bottom",
            display: "none",
          }}
          className="hover-img"
          src={galleryImages?.nodes?.[1]?.sourceUrl}
          srcSet={galleryImages?.nodes?.[1]?.srcSet}
        />
      )}
      <Text
        sx={{
          fontSize: 3,
          py: 1,
          px: 2,
          width: "100%",
          bg: "backgroundTransparent",
          color: "text",
        }}
      >
        {title}
      </Text>
    </Link>
  </NextLink>
);
