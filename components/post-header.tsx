/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import { MediaImage } from "types";
import { Fragment } from "react";
import { CategoryListItem } from "lib/types";

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
      <PostTitle sx={{ mb: 1 }}>{title}</PostTitle>
      <Box
        sx={{
          fontSize: 0,
          color: "muted",
          mb: 1,
        }}
      >
        Pubblicato <Date dateString={date} />
        <Categories categories={categories} />
      </Box>
      <CoverImage title={title} coverImage={coverImage} />
    </Fragment>
  );
}
