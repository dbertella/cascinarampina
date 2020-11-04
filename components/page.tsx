/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Head from "next/head";
import MoreStories from "components/more-stories";
import Layout from "components/layout";
import PostBody from "components/post-body";
import { ImageHeader } from "components/image-header";
import { PageSingle, PostList } from "lib/types";
import { FC } from "react";

export type PageProps = {
  data: {
    page: PageSingle;
    posts: PostList;
  };
};

export const Page: FC<PageProps> = ({
  data: {
    page,
    posts: { edges },
  },
  children,
}) => (
  <Layout>
    <Head>
      <title>{page.title} | Azienda Agricola Cascina Rampina</title>
      <meta property="og:image" content={page.featuredImage?.node?.sourceUrl} />
    </Head>

    <ImageHeader title={page.title} coverImage={page.featuredImage?.node} />
    <Box variant="styles.container">
      <PostBody content={page.content} />
      {children}
    </Box>
    {edges.length > 0 && <MoreStories posts={edges} />}
  </Layout>
);
