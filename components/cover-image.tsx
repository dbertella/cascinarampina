import { PLACEHOLDER_IMAGE } from "lib";
import { MediaImage } from "types";
import { Link } from "./ui";

type Props = {
  title: string;
  coverImage?: MediaImage;
  href?: string;
  [key: string]: any;
};

export default function CoverImage({
  title,
  coverImage,
  href,
  ...rest
}: Props) {
  const image = (
    <img
      src={coverImage?.sourceUrl ?? PLACEHOLDER_IMAGE}
      alt={title}
      srcSet={coverImage?.srcSet}
      {...rest}
    />
  );
  return href ? (
    <Link href={href} aria-label={title}>
      {image}
    </Link>
  ) : (
    image
  );
}
