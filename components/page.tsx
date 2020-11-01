/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Head from "next/head";
import MoreStories from "components/more-stories";
import Layout from "components/layout";
import PostBody from "components/post-body";
import PageHeader from "components/page-header";
import { PageFields, PostList } from "lib/types";
import { FC } from "react";

export type PageProps = {
  data: {
    page: PageFields;
    posts: { edges: { node: PostList }[] };
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

    <Box variant="styles.container">
      <PageHeader title={page.title} coverImage={page.featuredImage?.node} />
      <PostBody content={page.content} />
      {children}
    </Box>
    {edges.length > 0 && <MoreStories posts={edges} />}
  </Layout>
);
