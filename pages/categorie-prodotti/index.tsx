import { LinkToSingle } from "components/LinkToSingle";
import { Page, PageProps } from "components/page";
import { getPageByUri, getProductCategories } from "lib";
import { CateogryListItem } from "lib/types";
import Head from "next/head";
import { Grid } from "theme-ui";

const ProductCategories = ({
  data,
  productCategories,
}: PageProps & {
  productCategories: { edges: CateogryListItem[] };
}) => {
  return (
    <Page data={data}>
      <Head>
        <title>Categorie di prodotti | Azienda Agricola Cascina Rampina</title>
      </Head>
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
            image={image}
            title={name}
          />
        ))}
      </Grid>
    </Page>
  );
};

export default ProductCategories;

export async function getStaticProps() {
  const data = await getPageByUri("prodotti");
  const { productCategories } = await getProductCategories();
  return {
    props: { data, productCategories },
  };
}
