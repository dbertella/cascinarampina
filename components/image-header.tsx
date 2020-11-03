import { MediaImage } from "types";
import { Flex, Heading, Image } from "theme-ui";

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
        src={coverImage?.sourceUrl}
      />
      <Heading
        as="h1"
        sx={{
          p: 1,
          textTransform: "uppercase",
          bg: "primary",
          color: "background",
        }}
      >
        {title}
      </Heading>
    </Flex>
  );
}
