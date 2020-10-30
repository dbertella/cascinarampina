import Link from "next/link";
import { Image } from "theme-ui";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage?: MediaImage;
  slug?: string;
};

export default function CoverImage({ title, coverImage, slug }: Props) {
  if (!coverImage?.sourceUrl) {
    return null;
  }
  const image = <Image src={coverImage?.sourceUrl} alt={title} />;
  return slug ? (
    <Link href={`/news/${slug}`}>
      <a aria-label={title}>{image}</a>
    </Link>
  ) : (
    image
  );
}
