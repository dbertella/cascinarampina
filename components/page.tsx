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
import { MediaImage } from "types";
import { ImageGallery } from "./ImageGallery";

export type PageProps = {
  headerSize?: number | Array<number | string | null>;
  data: {
    page: PageSingle;
    posts: PostList;
  };
};

export const Page: FC<PageProps> = ({
  headerSize,
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
  return (
    <Layout>
      <Head>
        <title>{page.title} | Azienda Agricola Cascina Rampina</title>
        <meta
          property="og:image"
          content={page.featuredImage?.node?.sourceUrl}
          key="feature-image"
        />
      </Head>

      <ImageHeader
        title={page.title}
        coverImage={page.featuredImage?.node}
        height={headerSize}
      />
      <Box variant="styles.container">
        <Box sx={{ maxWidth: "40em", my: [3, 4, 5], mx: "auto" }}>
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
