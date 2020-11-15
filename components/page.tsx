/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Head from "next/head";
import MoreStories from "components/more-stories";
import Layout from "components/layout";
import PostBody from "components/post-body";
import { ImageHeader } from "components/image-header";
import { HomeHeader } from "components/HomeHeader";
import { PageSingle, PostList } from "lib/types";
import { FC } from "react";
import { MediaImage } from "types";
import { ImageGallery } from "./ImageGallery";

export type PageProps = {
  home?: boolean;
  data: {
    page: PageSingle;
    posts: PostList;
  };
};

export const Page: FC<PageProps> = ({
  home,
  data: {
    page,
    posts: { edges },
  },
  children,
}) => {
  const gallery = page.pageElements?.pageGallery?.map(
    ({ image }: { image: MediaImage & { thumb: string } }) => ({
      original: image.sourceUrl,
      thumbnail: image.thumb,
      srcSet: image.srcSet,
    })
  );

  const pageHeader = home ? (
    <HomeHeader coverImage={page.featuredImage?.node} />
  ) : (
    <ImageHeader title={page.title} coverImage={page.featuredImage?.node} />
  );
  return (
    <Layout>
      <Head>
        <title>{page.seo.title}</title>
        <meta
          property="og:image"
          content={page.featuredImage?.node?.sourceUrl}
          key="feature-image"
        />
        {page.seo.metaDesc && (
          <meta name="description" content={page.seo.metaDesc} />
        )}
      </Head>

      {pageHeader}
      <Box variant="styles.container">
        <Box sx={{ maxWidth: "48em", my: [3, 4, 5], mx: "auto" }}>
          <PostBody content={page.content} />
        </Box>
        {children}
        {gallery && <ImageGallery gallery={gallery} />}
      </Box>
      {edges.length > 0 && (
        <MoreStories posts={edges} title="Cosa succede alla Rampina" />
      )}
    </Layout>
  );
};
