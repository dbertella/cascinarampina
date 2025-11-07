import { Box } from "./ui";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import { MediaImage } from "types";
import { Fragment } from "react";
import { CategoryListItem } from "lib";
import styles from "./post-header.module.css";

type Props = {
  title: string;
  coverImage?: MediaImage;
  date: string;
  categories: { edges: CategoryListItem[] };
};

export default function PostHeader({
  title,
  coverImage,
  date,
  categories,
}: Props) {
  return (
    <Fragment>
      <PostTitle className={styles.title}>{title}</PostTitle>
      <Box className={styles.meta}>
        Pubblicato <Date dateString={date} />
        <Categories categories={categories} />
      </Box>
      <CoverImage title={title} coverImage={coverImage} />
    </Fragment>
  );
}
