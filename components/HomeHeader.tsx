import { MediaImage } from "types";
import { Text } from "theme-ui";

import { ImageHeader } from "./image-header";

type Props = {
  coverImage?: MediaImage;
};

export function HomeHeader({ coverImage }: Props) {
  return (
    <ImageHeader coverImage={coverImage} height={[400, null, 600]}>
      <Text sx={{ fontSize: [4, 5, 7], whiteSpace: "nowrap" }}>
        Cascina Rampina
      </Text>
      <Text
        sx={{
          fontSize: [2, 3, 5],
          whiteSpace: "nowrap",
          wordSpacing: "-0.3em",
          mt: 1,
        }}
      >
        Azienda Agricola
      </Text>
    </ImageHeader>
  );
}
