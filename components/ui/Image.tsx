import { forwardRef, ImgHTMLAttributes } from "react";

type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ ...props }, ref) => {
    return <img ref={ref} {...props} />;
  }
);

Image.displayName = "Image";

