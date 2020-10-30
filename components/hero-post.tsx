import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage: MediaImage;
  date: string;
  excerpt: string;
  slug: string;
};

export default function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} coverImage={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a
                className="hover:underline"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        </div>
      </div>
    </section>
  );
}
