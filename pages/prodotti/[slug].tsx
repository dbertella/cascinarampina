import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box, Flex, Grid, Image, Text, Link as UiLink } from "theme-ui";
import { getAllProductsWithSlug, getProductBySlug } from "lib";
import { GetStaticProps } from "next";
import { ProductSingle } from "lib/types";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";
import Categories from "components/categories";
import { ProductPrice } from "components/products/Price";
import { PLACEHOLDER_IMAGE } from "lib";
import Link from "next/link";

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
              <Flex sx={{ alignItems: "center" }}>
                <Text mr={1}>Prezzo:</Text>
                <ProductPrice
                  price={product.price}
                  type={product.type}
                  onSale={product.onSale}
                />
              </Flex>
              <Box pt={2} />
              {/* <Button onClick={() => console.log(product)}>Aggiungi</Button> */}
              <Flex>
                {prev && (
                  <Link href={`/prodotti/${prev}`} passHref>
                    <UiLink>Prodotto Precedente</UiLink>
                  </Link>
                )}
                <Box pr={1} />
                {next && (
                  <Link href={`/prodotti/${next}`} passHref>
                    <UiLink>Prodotto Successivo</UiLink>
                  </Link>
                )}
              </Flex>
            </Box>
          </Grid>
          {product.related.edges.length > 0 && (
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
  const { product } = await getProductBySlug(`${params?.slug}`);
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
