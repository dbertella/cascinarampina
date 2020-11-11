import { LinkToSingle } from "components/LinkToSingle";
import { Page, PageProps } from "components/page";
import { getPageAndChildrensByUri } from "lib/api";
import { Grid } from "theme-ui";

const CosaFacciamo = (props: PageProps) => {
  const childrenPages = props.data.page?.children?.nodes ?? [];
  return (
    <Page {...props}>
      <Grid columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]} gap={3} my={3}>
        {childrenPages.map(({ slug, featuredImage, title }) => (
          <LinkToSingle
            key={slug}
            href={`/cosa-facciamo/${slug}`}
            image={featuredImage?.node}
            title={title}
          />
        ))}
      </Grid>
    </Page>
  );
};

export default CosaFacciamo;

export async function getStaticProps() {
  const data = await getPageAndChildrensByUri("cosa-facciamo");
  console.info("cosa-facciamo done");
  return {
    props: { data },
  };
}
