import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Text, Link } from "theme-ui";
import NextLink from "next/link";

export const LinkToSingle = ({
  imageSrc,
  title,
  href,
}: {
  imageSrc?: string;
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
        src={imageSrc ?? PLACEHOLDER_IMAGE}
        srcSet={imageSrc?.srcSet}
      />
      <Text
        sx={{
          fontSize: 3,
          py: 1,
          px: 2,
          width: "100%",
          textTransform: "uppercase",
          bg: "backgroundTransparent",
          color: "text",
        }}
      >
        {title}
      </Text>
    </Link>
  </NextLink>
);
