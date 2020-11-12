import ReactImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import { Box } from "theme-ui";
import "react-image-gallery/styles/css/image-gallery.css";
import theme from "styles/theme";

export type { ReactImageGalleryItem };

export const ImageGallery = ({
  gallery,
  ...rest
}: {
  gallery: ReactImageGalleryItem[];
}) => (
  <Box
    mt={5}
    sx={{
      ".image-gallery-icon": {
        [`@media (min-width: ${theme.breakpoints[2]})`]: {
          "&:hover": {
            color: "primary",
          },
        },
        "&:focus": {
          outlineColor: "primary",
        },
      },
    }}
  >
    <ReactImageGallery items={gallery} showPlayButton={false} {...rest} />
  </Box>
);
