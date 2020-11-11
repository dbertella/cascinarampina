import { PLACEHOLDER_IMAGE } from "lib";
import { Image, Link, Flex, Button } from "theme-ui";
import NextLink from "next/link";
import { MediaImage } from "types";
import PostBody from "components/post-body";

export const HomeBlock = ({
  image,
  content,
  href,
  even,
  ctaText,
}: {
  image?: MediaImage;
  content: string;
  href: string;
  even: boolean;
  ctaText?: string;
}) => (
  <Flex
    sx={{
      flexDirection: ["column", null, even ? "row-reverse" : "row"],
    }}
  >
    <NextLink href={href} passHref>
      <Link
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          textDecoration: "none",
          height: 500,
          width: ["100%", null, "50%"],
        }}
      >
        <Image
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            verticalAlign: "bottom",
          }}
          src={image?.sourceUrl ?? PLACEHOLDER_IMAGE}
          srcSet={image?.srcSet}
        />
      </Link>
    </NextLink>
    <Flex
      sx={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        padding: 5,
        width: ["100%", null, "50%"],
      }}
    >
      <PostBody content={content} />
      {ctaText && (
        <NextLink href={href} passHref>
          <Button variant="outline">{ctaText}</Button>
        </NextLink>
      )}
    </Flex>
  </Flex>
);
