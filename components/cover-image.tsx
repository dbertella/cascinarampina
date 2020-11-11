import { PLACEHOLDER_IMAGE } from "lib";
import Link from "next/link";
import { Image } from "theme-ui";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage?: MediaImage;
  href?: string;
};

export default function CoverImage({
  title,
  coverImage,
  href,
  ...rest
}: Props) {
  const image = (
    <Image
      src={coverImage?.sourceUrl ?? PLACEHOLDER_IMAGE}
      alt={title}
      srcSet={coverImage?.srcSet}
      {...rest}
    />
  );
  return href ? (
    <Link href={href}>
      <a aria-label={title}>{image}</a>
    </Link>
  ) : (
    image
  );
}
