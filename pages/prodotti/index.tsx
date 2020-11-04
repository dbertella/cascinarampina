import Layout from "components/layout";
import { getProductCategories } from "lib";
import { CateogryListItem } from "lib/types";
import Head from "next/head";
import Link from "next/link";
import { Grid, Image, Text, Link as UiLink } from "theme-ui";

const Products = ({
  productCategories,
}: {
  productCategories: { edges: CateogryListItem[] };
}) => {
  return (
    <Layout>
      <Head>
        <title>Prodotti | Azienda Agricola Cascina Rampina</title>
        <meta
          property="og:image"
          content={productCategories.edges[0].node.image?.sourceUrl}
        />
      </Head>
      <Grid
        columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={2}
        variant="styles.container"
      >
        {productCategories.edges.map(({ node: { slug, image, name } }) => (
          <Link key={slug} href={`/categoria-prodotto/${slug}`} passHref>
            <UiLink
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 300,
              }}
            >
              <Image
                sx={{
                  position: "absolute",
                  zIndex: -1,
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  verticalAlign: "bottom",
                }}
                src={image?.sourceUrl}
              />
              <Text
                sx={{
                  fontSize: 3,
                  p: 1,
                  textTransform: "uppercase",
                  bg: "primary",
                  color: "background",
                }}
              >
                {name}
              </Text>
            </UiLink>
          </Link>
        ))}
      </Grid>
    </Layout>
  );
};

export default Products;

export async function getStaticProps() {
  const { productCategories } = await getProductCategories();
  return {
    props: { productCategories },
  };
}
