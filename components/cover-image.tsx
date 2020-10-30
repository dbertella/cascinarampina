import Link from "next/link";
import { ReactNode } from "react";
import { MediaImage } from "types";

type Props = {
  title: ReactNode;
  coverImage?: MediaImage;
  slug?: string;
};

export default function CoverImage({ title, coverImage, slug }: Props) {
  const image = <img src={coverImage?.sourceUrl} />;
  return (
    <div>
      {slug ? (
        <Link as={`/news/${slug}`} href="/news/[slug]">
          <a aria-label={String(title)}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
