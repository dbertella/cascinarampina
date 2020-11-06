import { AllProducts } from "components/all-products";
import { ImageHeader } from "components/image-header";
import Layout from "components/layout";
import { LinkToSingle } from "components/LinkToSingle";
import { getProductCategories } from "lib";
import { CateogryListItem } from "lib/types";
import { sample } from "lodash";
import Head from "next/head";
import Link from "next/link";
import { Button, Grid } from "theme-ui";

const ProductCategories = ({
  productCategories,
}: {
  productCategories: { edges: CateogryListItem[] };
}) => {
  return (
    <Layout>
      <Head>
        <title>Categorie di prodotti | Azienda Agricola Cascina Rampina</title>
        <meta
          property="og:image"
          content={productCategories.edges[0].node.image?.sourceUrl}
        />
      </Head>
      <ImageHeader
        title="I nostri prodotti"
        coverImage={sample(productCategories.edges)?.node?.image}
      />
      <Grid
        columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]}
        gap={3}
        variant="styles.container"
        my={3}
      >
        {productCategories.edges.map(({ node: { slug, image, name } }) => (
          <LinkToSingle
            key={slug}
            href={`/categorie-prodotti/${slug}`}
            imageSrc={image?.sourceUrl}
            title={name}
          />
        ))}
      </Grid>
      <AllProducts>
        <Link href="/prodotti" passHref>
          <Button variant="secondary" sx={{ zIndex: 1 }}>
            Guarda tutti i prodotti
          </Button>
        </Link>
      </AllProducts>
    </Layout>
  );
};

export default ProductCategories;

export async function getStaticProps() {
  const { productCategories } = await getProductCategories();
  return {
    props: { productCategories },
  };
}
