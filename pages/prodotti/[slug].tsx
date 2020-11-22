import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "components/post-body";
import Layout from "components/layout";
import PostTitle from "components/post-title";
import Head from "next/head";
import { Box, Flex, Grid, Image, Text, Link as UiLink, Button } from "theme-ui";
import {
  addToCart,
  getAllProductsWithSlug,
  getCart,
  getProductBySlug,
} from "lib";
import { GetStaticProps } from "next";
import { ProductSingle } from "lib";
import { MoreProducts } from "components/products/more-products";
import { ImageHeader } from "components/image-header";
import Categories from "components/categories";
import { ProductPrice } from "components/products/Price";
import { PLACEHOLDER_IMAGE } from "lib";
import Link from "next/link";
import { useQuery, useMutation, useQueryCache } from "react-query";
import { v4 } from "uuid";

const useWooSession = () => {
  const { data } = useQuery(["SET_SESSION"], () =>
    fetch("/api/woo-session").then((r) => r.json())
  );

  const session = data?.session;
  console.log(session);
  if (session) {
    // Remove session data if session destroyed.
    if ("false" === session) {
      localStorage.removeItem("woo-session");

      // Update session new data if changed.
    } else if (localStorage.getItem("woo-session") !== session) {
      localStorage.setItem("woo-session", session);
    }
  }
};

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

  const queryCache = useQueryCache();

  const [addProductToCart] = useMutation(addToCart, {
    onSuccess: () => {
      queryCache.refetchQueries(["GET_CART"]);
    },
  });

  useWooSession();

  const { data /** isLoading, error */ } = useQuery(["GET_CART"], getCart);

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  // console.log(product);
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
          TOTALE: {data?.cart?.total}
          <br />
          CONTENTUTO CARRELLO: {JSON.stringify(data?.cart?.contents?.nodes)}
          <Grid
            as="article"
            columns={["auto", "1fr 2fr"]}
            variant="styles.container"
            py={5}
          >
            <Flex
              sx={{
                justifyContent: ["center", "flex-end"],
                alignItems: "start",
              }}
            >
              <Image
                src={product.image?.sourceUrl ?? PLACEHOLDER_IMAGE}
                srcSet={product.image?.srcSet}
              />
            </Flex>
            <Box>
              <Flex
                sx={{
                  flexWrap: "wrap",
                  flexDirection: ["column", null, "row"],
                  fontSize: 2,
                }}
              >
                <Categories categories={product.productCategories} />
                <Box pr={3} />
                <Flex sx={{ flexWrap: "wrap" }}>
                  <Text sx={{ mr: 2, color: "lightGrey" }}>Vai a:</Text>
                  {prev && (
                    <Link href={`/prodotti/${prev}`} passHref>
                      <UiLink>Prodotto Precedente</UiLink>
                    </Link>
                  )}
                  <Box pr={2} />
                  {next && (
                    <Link href={`/prodotti/${next}`} passHref>
                      <UiLink>Prodotto Successivo</UiLink>
                    </Link>
                  )}
                  <Box pr={2} />
                  <Link href="/prodotti" passHref>
                    <UiLink>Tutti i prodotti</UiLink>
                  </Link>
                </Flex>
              </Flex>
              <PostBody content={product.shortDescription} />
              <Text sx={{ color: "lightGrey", fontSize: 2 }}>
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
              <Button
                onClick={() =>
                  addProductToCart({
                    clientMutationId: v4(),
                    productId: product.databaseId,
                  })
                }
              >
                Aggiungi
              </Button>
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
