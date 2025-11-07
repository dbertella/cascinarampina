import Head from "next/head";
import MoreStories from "components/more-stories";
import Layout from "components/layout";
import PostBody from "components/post-body";
import { ImageHeader } from "components/image-header";
import { HomeHeader } from "components/HomeHeader";
import { PageSingle, PostList } from "lib";
import { FC, ReactNode } from "react";
import { ImageGallery, ReactImageGalleryItem } from "./ImageGallery";
import styles from "./page.module.css";

export type PageProps = {
  home?: boolean;
  data: {
    page: PageSingle;
    posts: PostList;
  };
  gallery?: ReactImageGalleryItem[];
  children?: ReactNode;
};

export const Page: FC<PageProps> = ({
  home,
  data: {
    page,
    posts: { edges },
  },
  gallery,
  children,
}) => {
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

        <link rel="canonical" href={page.seo.canonical} />
      </Head>

      {pageHeader}
      <div className="container">
        <div className={styles.content}>
          <PostBody content={page.content} />
        </div>
        {children}
        {gallery && <ImageGallery gallery={gallery} />}
      </div>
      {edges.length > 0 && (
        <MoreStories posts={edges} title="Cosa succede alla Rampina" />
      )}
    </Layout>
  );
};
