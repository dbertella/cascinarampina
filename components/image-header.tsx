import { MediaImage } from "types";
import { Flex, Heading, Image } from "theme-ui";
import { PLACEHOLDER_IMAGE } from "lib";
import { Stroke } from "components/icons/Stroke";
import { ReactNode } from "react";

type Props = {
  title?: string;
  coverImage?: MediaImage;
  children?: ReactNode;
  height?: string | number | (string | null | number)[];
};

export function ImageHeader({
  title,
  coverImage,
  height = 300,
  children,
}: Props) {
  return (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        height,
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
          px: 5,
          maxWidth: 600,
          textTransform: "uppercase",
          fontFamily: "cascinarampina",
          textAlign: "center",
          color: "background",
          wordSpacing: ["-0.3em", "-0.4em", "-0.5em"],
        }}
      >
        <Stroke
          sx={{
            fill: "primary",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            transform: "translate(-50%, -50%)",
            zIndex: -1,
          }}
        />
        {children ?? title}
      </Heading>
    </Flex>
  );
}
