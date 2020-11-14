import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Text, Link } from "theme-ui";
import NextLink from "next/link";
import { MediaImage } from "types";

export const LinkToSingle = ({
  image,
  title,
  href,
}: {
  image?: MediaImage;
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
        src={image?.sourceUrl ?? PLACEHOLDER_IMAGE}
        srcSet={image?.srcSet}
      />
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
