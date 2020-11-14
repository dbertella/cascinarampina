import { MediaImage } from "types";
import { Flex, Heading, Image } from "theme-ui";
import { PLACEHOLDER_IMAGE } from "lib";
import { Stroke } from "components/icons/Stroke";

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
        overflow: "hidden",
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
          position: "relative",
          py: 1,
          px: 3,
          m: 4,
          fontSize: [4, 5, 6],
          textTransform: "uppercase",
          fontFamily: "cascinarampina",
          textAlign: "center",
          maxWidth: 500,
          color: "background",
          wordSpacing: "-0.5em",
        }}
      >
        <Stroke
          sx={{
            fill: "primary",
            position: "absolute",
            top: "-20%",
            left: "-20%",
            zIndex: -1,
            width: "140%",
            height: "140%",
          }}
        />
        {title}
      </Heading>
    </Flex>
  );
}
