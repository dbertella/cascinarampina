import Link from "next/link";
import { Image } from "theme-ui";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage?: MediaImage;
  href?: string;
};

export default function CoverImage({ title, coverImage, href }: Props) {
  if (!coverImage?.sourceUrl) {
    return null;
  }
  console.log(coverImage);
  const image = <Image src={coverImage?.sourceUrl} alt={title} />;
  return href ? (
    <Link href={href}>
      <a aria-label={title}>{image}</a>
    </Link>
  ) : (
    image
  );
}
