import { MediaImage } from "types";
import { Flex, Heading, Image } from "theme-ui";
import { PLACEHOLDER_IMAGE } from "lib";

type Props = {
  title: string;
  coverImage?: MediaImage;
  height?: number | Array<number | string | null>;
};

export function ImageHeader({ title, coverImage, height = 300 }: Props) {
  return (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height,
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
        src={coverImage?.sourceUrl ?? PLACEHOLDER_IMAGE}
        srcSet={coverImage?.srcSet}
      />
      <Heading
        as="h1"
        sx={{
          py: 1,
          px: 3,
          mx: 4,
          fontSize: [4, 5, 6],
          textTransform: "uppercase",
          bg: "backgroundTransparent",
          fontFamily: "cascinarampina",
          textAlign: "center",
          maxWidth: 500
        }}
      >
        {title}
      </Heading>
    </Flex>
  );
}
