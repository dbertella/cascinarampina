import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box } from "theme-ui";
import { getAllProductCategoriesWithSlug, getProductCategory } from "lib";
import { GetStaticProps } from "next";
import { CateogrySingle } from "lib/types";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";

export default function Product({
  productCategory,
}: {
  productCategory: CateogrySingle;
}) {
  const router = useRouter();

  if (!router.isFallback && !productCategory?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>
              {productCategory.name} | Azienda Agricola Cascina Rampina
            </title>
            <meta
              property="og:image"
              content={productCategory.image?.sourceUrl}
              key="feature-image"
            />
          </Head>
          <ImageHeader
            title={productCategory.name}
            coverImage={productCategory.image}
          />

          <Box as="article" variant="styles.container">
            <Box sx={{ maxWidth: "40em", my: [3, 4, 5], mx: "auto" }}>
              <PostBody content={productCategory.description} />
            </Box>
          </Box>
          {productCategory.products.edges.length > 0 && (
            <MoreProducts products={productCategory.products.edges} />
          )}
        </>
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { productCategory } = await getProductCategory(params.slug);

  return {
    props: {
      productCategory,
    },
  };
};

type Category = {
  node: {
    slug: string;
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllProductCategoriesWithSlug();

  return {
    paths:
      allPosts.edges.map(
        ({ node }: Category) => `/categorie-prodotti/${node.slug}`
      ) || [],
    fallback: true,
  };
}
