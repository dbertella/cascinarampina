import { AllProducts } from "components/all-products";
import { ImageHeader } from "components/image-header";
import Layout from "components/layout";
import { LinkToSingle } from "components/LinkToSingle";
import { getProducts } from "lib";
import { CategoryListItem } from "lib";
import { sample } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { Button, Grid } from "theme-ui";

const Products = ({
  products,
  canonical,
}: {
  products: { edges: CategoryListItem[] };
  canonical: string;
}) => {
  return (
    <Layout>
      <Head>
        <title>Prodotti | Cascina Rampina</title>
        <meta
          property="og:image"
          content={products.edges[0].node.image?.sourceUrl}
          key="feature-image"
        />
        <link rel="canonical" href={canonical} />
      </Head>
      <ImageHeader
        title="Tutti i prodotti"
        coverImage={sample(products.edges)?.node?.image}
      />
      <Grid
        columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={3}
        variant="styles.container"
        my={3}
      >
        {products.edges.map(({ node: { slug, image, name } }) => (
          <LinkToSingle
            key={slug}
            href={`/prodotti/${slug}`}
            image={image}
            title={name}
          />
        ))}
      </Grid>
      <AllProducts>
        <Link href="/categorie-prodotti" passHref>
          <Button variant="secondary" sx={{ zIndex: 1 }}>
            Guarda le categorie prodotti
          </Button>
        </Link>
      </AllProducts>
    </Layout>
  );
};

export default Products;

export async function getStaticProps() {
  const { products } = await getProducts();
  const canonical = `${process.env.SITE_URL}/prodotti`;
  return {
    props: { products, canonical },
  };
}
