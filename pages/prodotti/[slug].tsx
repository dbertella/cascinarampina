import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box, Grid, Image, Text } from "theme-ui";
import { getProductBySlug } from "lib";
import { Button } from "theme-ui";
import { GetServerSideProps } from "next";
import { ProductSingle } from "lib/types";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";
import Categories from "components/categories";
import { ProductPrice } from "components/products/Price";
import { PLACEHOLDER_IMAGE } from "lib";

export default function Product({ product }: { product: ProductSingle }) {
  const router = useRouter();

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const otherProducts = product.productCategories.edges.flatMap(
    (el) => el.node.products
  );

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>{product.name} | Azienda Agricola Cascina Rampina</title>
            <meta property="og:image" content={product.image?.sourceUrl} />
          </Head>
          <ImageHeader
            title={product.name}
            coverImage={
              product.productCategories.edges.map((cat) => cat.node.image)[0]
            }
          />

          <Grid
            as="article"
            columns={["auto", "1fr 2fr"]}
            variant="styles.container"
            py={5}
          >
            <Image src={product?.image?.sourceUrl ?? PLACEHOLDER_IMAGE} />
            <Box>
              <Box>
                <Categories categories={product.productCategories} />
              </Box>
              <PostBody content={product.shortDescription} />
              <Text sx={{ color: "lightGrey", fontSize: 1 }}>
                <PostBody content={product.description} />
              </Text>
              <ProductPrice
                price={product.price}
                type={product.type}
                onSale={product.onSale}
              />
              <Box pt={2} />
              <Button onClick={() => console.log(product)}>Aggiungi</Button>
            </Box>
          </Grid>
          {otherProducts.length > 0 && (
            <MoreProducts products={otherProducts[0].edges} />
          )}
        </>
      )}
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { slug },
  } = context;

  const id = slug ? slug : context.query.id;

  const { product } = await getProductBySlug(id as string);

  return {
    props: {
      product,
      revalidate: 1,
    },
  };
};

// export async function getStaticProps({
//   params,
//   preview = false,
//   previewData,
// }: any) {
//   const data = await getPostAndMorePosts(params.slug, preview, previewData);

//   return {
//     props: {
//       preview,
//       post: data.post,
//       posts: data.posts,
//     },
//   };
// }

// type Post = {
//   node: {
//     slug: string;
//   };
// };

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();

//   return {
//     paths: allPosts.edges.map(({ node }: Post) => `/news/${node.slug}`) || [],
//     fallback: true,
//   };
// }
