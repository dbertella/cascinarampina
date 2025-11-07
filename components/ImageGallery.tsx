import ReactImageGallery, {
  ReactImageGalleryItem,
  ReactImageGalleryProps,
} from "react-image-gallery";
import { Box } from "./ui";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./ImageGallery.module.css";
import { ComponentType } from "react";

export type { ReactImageGalleryItem };

// Type assertion to fix React type version conflict between react-image-gallery and React 18
const Gallery = ReactImageGallery as ComponentType<ReactImageGalleryProps>;

export const ImageGallery = ({
  gallery,
  ...rest
}: {
  gallery: ReactImageGalleryItem[];
} & Omit<ReactImageGalleryProps, "items">) => (
  <Box className={styles.container}>
    <Gallery items={gallery} showPlayButton={false} {...rest} />
  </Box>
);
