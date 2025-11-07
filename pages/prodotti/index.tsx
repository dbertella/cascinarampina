import { AllProducts } from "components/all-products";
import { ImageHeader } from "components/image-header";
import Layout from "components/layout";
import { LinkToSingle } from "components/LinkToSingle";
import { getProducts } from "lib";
import { CategoryListItem } from "lib";
import Head from "next/head";
import { Button, Grid, Link } from "components/ui";
import styles from "./index.module.css";

const Products = ({
  products,
  canonical,
  coverImage,
}: {
  products: { edges: CategoryListItem[] };
  canonical: string;
  coverImage?: any;
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
        coverImage={coverImage}
      />
      <Grid
        columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={3}
        variant="styles.container"
        className={styles.grid}
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
        <Link href="/categorie-prodotti">
          <Button variant="secondary" className={styles.button}>
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
  // Select a deterministic cover image (first product with an image)
  const coverImage = products.edges.find(edge => edge.node.image)?.node?.image || products.edges[0]?.node?.image;
  return {
    props: { products, canonical, coverImage },
  };
}
