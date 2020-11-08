import { MediaImage } from "types";
import { Flex, Heading, Image } from "theme-ui";
import { PLACEHOLDER_IMAGE } from "lib";

type Props = {
  title: string;
  coverImage?: MediaImage;
};

export function ImageHeader({ title, coverImage }: Props) {
  return (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
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
        src={coverImage?.sourceUrl ?? PLACEHOLDER_IMAGE}
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
        }}
      >
        {title}
      </Heading>
    </Flex>
  );
}
