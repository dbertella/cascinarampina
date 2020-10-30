import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./_categories";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage: MediaImage;
  date: string;
  categories: string[];
};

export default function PostHeader({
  title,
  coverImage,
  date,
  categories,
}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} coverImage={coverImage} />
      <div>
        Pubblicato <Date dateString={date} />
        <Categories categories={categories} />
      </div>
    </>
  );
}
