/** @jsxRuntime classic */
/** @jsx jsx */
import { Image, jsx } from "theme-ui";
import Head from "next/head";
import { getAllPostsForHome } from "../lib/api";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";

export default function Home({ allPosts: { edges } }: any) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  return (
    <div>
      <Head>
        <title>Azienda Agricola Cascina Rampina</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Image src="/images/logo.png" alt="Azienda Agricola Cascina Rampina" />
      </main>
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
      <footer>Azienda Agricola Cascina Rampina | Powered by ❤️</footer>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
