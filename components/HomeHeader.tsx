import { MediaImage } from "types";
import { Flex, Heading, Image, Text } from "theme-ui";
import { PLACEHOLDER_IMAGE } from "lib";
import { Stroke } from "components/icons/Stroke";

type Props = {
  coverImage?: MediaImage;
};

export function HomeHeader({ coverImage }: Props) {
  return (
    <Flex
      sx={{
        position: "relative",
        justifyContent: "center",
        alignItems: "flex-start",
        height: [400, null, 600],
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
          my: 5,
          mx: 4,
          textTransform: "uppercase",
          fontFamily: "cascinarampina",
          textAlign: "center",
          maxWidth: 500,
          color: "background",
          wordSpacing: ["-0.3em", "-0.4em", "-0.5em"],
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
        <Text sx={{ fontSize: [4, 5, 6] }}>
          Cascina Rampina
        </Text>
        <Text sx={{ fontSize: [2, 3, 4], wordSpacing: "-0.3em", mt: 1 }}>
          Azienda Agricola
        </Text>
      </Heading>
    </Flex>
  );
}
