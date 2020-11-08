import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import MoreStories from "components/more-stories";
import PostHeader from "components/post-header";
import Layout from "components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box } from "theme-ui";

export default function Post({ post, posts }: any) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Box as="article" variant="styles.container">
            <Head>
              <title>{post.title} | Azienda Agricola Cascina Rampina</title>
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
                key="feature-image"
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage?.node}
              date={post.date}
              categories={post.categories}
            />
            <PostBody content={post.content} />
          </Box>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }: any) {
  const data = await getPostAndMorePosts(params.slug);

  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
  };
}

type Post = {
  node: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }: Post) => `/news/${node.slug}`) || [],
    fallback: true,
  };
}
