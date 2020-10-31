/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Head from "next/head";
import { getPageFromSlug } from "lib/api";
import MoreStories from "components/more-stories";
import Layout from "components/layout";
import PostBody from "components/post-body";
import PageHeader from "components/page-header";

export default function Home({
  data: {
    page,
    posts: { edges },
  },
}: any) {
  return (
    <Layout>
      <Head>
        <title>{page.title} | Azienda Agricola Cascina Rampina</title>
        <meta
          property="og:image"
          content={page.featuredImage?.node?.sourceUrl}
        />
      </Head>

      <Box variant="styles.container">
        <PageHeader title={page.title} coverImage={page.featuredImage?.node} />
        <PostBody content={page.content} />
      </Box>
      {edges.length > 0 && <MoreStories posts={edges} />}
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getPageFromSlug("dove-siamo");
  return {
    props: { data },
  };
}
