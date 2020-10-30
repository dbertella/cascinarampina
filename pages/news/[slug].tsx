import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import MoreStories from "components/more-stories";
import Header from "components/header";
import PostHeader from "components/post-header";
import SectionSeparator from "components/section-separator";
import Layout from "components/layout";
import { getAllPostsWithSlug, getPostAndMorePosts } from "lib/api";
import PostTitle from "components/post-title";
import Head from "next/head";

export default function Post({ post, posts }: any) {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      <Header />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article>
            <Head>
              <title>{post.title} | Azienda Agricola Cascina Rampina</title>
              <meta
                property="og:image"
                content={post.featuredImage?.node?.sourceUrl}
              />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.featuredImage?.node}
              date={post.date}
              categories={post.categories}
            />
            <PostBody content={post.content} />
          </article>

          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false, previewData }: any) {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
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
