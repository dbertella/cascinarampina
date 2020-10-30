/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Head from "next/head";
import { getAllPostsForHome } from "lib/api";
import MoreStories from "components/more-stories";
import HeroPost from "components/hero-post";
import Layout from "components/layout";

export default function Home({ allPosts: { edges } }: any) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <Layout>
      <Head>
        <title>Azienda Agricola Cascina Rampina</title>
      </Head>
      <Box variant="styles.container">
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage?.node}
            date={heroPost.date}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
      </Box>
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
