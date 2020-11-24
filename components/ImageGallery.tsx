import ReactImageGallery, {
  ReactImageGalleryItem,
  ReactImageGalleryProps,
} from "react-image-gallery";
import { Box } from "theme-ui";
import "react-image-gallery/styles/css/image-gallery.css";

export type { ReactImageGalleryItem };

export const ImageGallery = ({
  gallery,
  ...rest
}: {
  gallery: ReactImageGalleryItem[];
} & Omit<ReactImageGalleryProps, "items">) => (
  <Box
    mt={5}
    sx={{
      width: "100%",
      ".image-gallery-content:not(.fullscreen) .image-gallery-slide div": {
        width: "100%",
        height: 0,
        pt: "62.5%" /* Make the image wrapping div take a ratio of 3:4 */,
        position: "relative",
        img: {
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
          objectPosition: "center center",
          width: "100%",
          height: "100%",
        },
      },
      ".image-gallery-svg": {
        height: 50,
        width: 20,
      },
      ".image-gallery-fullscreen-button .image-gallery-svg": {
        height: 20,
      },
      ".image-gallery-icon": {
        p: 3,
        "&:hover": {
          color: "primary",
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
