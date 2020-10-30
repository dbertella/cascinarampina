import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import { MediaImage } from "types";

type Props = {
  title: string;
  coverImage?: MediaImage;
};

export default function PostHeader({ title, coverImage }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <CoverImage title={title} coverImage={coverImage} />
    </>
  );
}
