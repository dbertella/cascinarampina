// @ts-nocheck - theme-ui v0.3.x types incompatible with React 18
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box, Flex, Grid, Image, Text, Link } from "components/ui";
import { getAllProductsWithSlug, getProductBySlug } from "lib";
import { GetStaticProps } from "next";
import { ProductSingle } from "lib";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";
import Categories from "components/categories";
import { ProductPrice } from "components/products/Price";
import { PLACEHOLDER_IMAGE } from "lib";
import { ImageGallery } from "components/ImageGallery";
import styles from "./product.module.css";

export default function Product({
  product,
  next,
  prev,
}: {
  next?: string;
  prev?: string;
  product: ProductSingle;
}) {
  const router = useRouter();

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <Head>
            <title>{product.seo.title}</title>
            <meta
              property="og:image"
              content={product.image?.sourceUrl}
              key="feature-image"
            />
            {product.seo.metaDesc && (
              <meta name="description" content={product.seo.metaDesc} />
            )}
            <link rel="canonical" href={product.seo.canonical} />
          </Head>
          <ImageHeader
            title={product.name}
            coverImage={
              product.image ??
              product.productCategories?.edges?.map(
                (cat) => cat.node.image
              )?.[0]
            }
          />

          <Grid
            as="article"
            columns={["auto", "1fr 2fr"]}
            variant="styles.container"
            className={styles.articleGrid}
          >
            <Flex className={styles.imageContainer}>
              {product.galleryImages.nodes.length > 0 ? (
                <ImageGallery
                  gallery={product.galleryImages.nodes.map((img) => ({
                    ...img,
                    original: img.sourceUrl,
                  }))}
                  showThumbnails={false}
                />
              ) : (
                <Image
                  src={product.image?.sourceUrl ?? PLACEHOLDER_IMAGE}
                  srcSet={product.image?.srcSet}
                />
              )}
            </Flex>
            <Box>
              <Flex className={styles.categoriesContainer}>
                <Categories categories={product.productCategories} />
                <Box className={styles.spacer} />
                <Flex className={styles.navigationContainer}>
                  <Text className={styles.navigationLabel}>Vai a:</Text>
                  {prev && (
                    <Link href={`/prodotti/${prev}`}>Prodotto Precedente</Link>
                  )}
                  <Box className={styles.spacerSmall} />
                  {next && (
                    <Link href={`/prodotti/${next}`}>Prodotto Successivo</Link>
                  )}
                  <Box className={styles.spacerSmall} />
                  <Link href="/prodotti">Tutti i prodotti</Link>
                </Flex>
              </Flex>
              <PostBody content={product.shortDescription} />
              <Text className={styles.description}>
                <PostBody content={product.description} />
              </Text>
              <Flex className={styles.priceContainer}>
                <Text className={styles.priceLabel}>Prezzo:</Text>
                <ProductPrice
                  price={product.price}
                  type={product.type}
                  onSale={product.onSale}
                />
              </Flex>
              <Box pt={2} />
              {/* <Button onClick={() => console.log(product)}>Aggiungi</Button> */}
            </Box>
          </Grid>
          {product.related?.edges?.length > 0 && (
            <MoreProducts
              products={product.related.edges}
              title="Ti potrebbe interessare"
            />
          )}
        </>
      )}
    </Layout>
  );
}

type Products = {
  node: {
    slug: string;
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const resolvedParams = await params;
  const { product } = await getProductBySlug(`${resolvedParams?.slug}`);
  const allProducts = await getAllProductsWithSlug();

  const currentIndex = allProducts.edges.findIndex(
    ({ node }: Products) => node.slug === product.slug
  );

  return {
    props: {
      product,
      next: allProducts.edges?.[currentIndex + 1]?.node?.slug ?? null,
      prev: allProducts.edges?.[currentIndex - 1]?.node?.slug ?? null,
    },
  };
};

export async function getStaticPaths() {
  const allProducts = await getAllProductsWithSlug();

  return {
    paths:
      allProducts.edges.map(({ node }: Products) => `/prodotti/${node.slug}`) ||
      [],
    fallback: true,
  };
}
