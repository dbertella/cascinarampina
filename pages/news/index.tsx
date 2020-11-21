/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Head from "next/head";
import { getAllPostsForHome } from "lib";
import MoreStories from "components/more-stories";
import HeroPost from "components/hero-post";
import Layout from "components/layout";
import { PostList } from "lib";

export default function Home({
  allPosts: { edges },
  canonical,
}: {
  allPosts: PostList;
  canonical: string;
}) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <Layout>
      <Head>
        <title>Novità | Cascina Rampina</title>
        <link rel="canonical" href={canonical} />
      </Head>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.featuredImage?.node}
          date={heroPost.date}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPostsForHome();
  const canonical = `${process.env.SITE_URL}/news`;
  return {
    props: { allPosts, canonical },
  };
}
