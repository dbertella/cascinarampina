import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box, Flex, Image } from "theme-ui";
import { getProductBySlug } from "lib";
import { Button } from "theme-ui";
import { GetServerSideProps } from "next";
import { ProductFields } from "lib/types";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";
import Categories from "components/categories";
import { ProductPrice } from "components/products/Price";

export default function Product({ product }: { product: ProductFields }) {
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

          <Flex as="article" variant="styles.container" py={5}>
            <Image src={product.image.sourceUrl} />
            <Box pr={5} />
            <Box>
              <Box>
                <Categories categories={product.productCategories} />
              </Box>
              <PostBody content={product.description} />
              <ProductPrice
                price={product.price}
                type={product.type}
                onSale={product.onSale}
              />
              <Box pt={2} />
              <Button onClick={() => console.log(product)}>Aggiungi</Button>
            </Box>
          </Flex>
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
