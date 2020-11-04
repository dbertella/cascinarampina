import { Page, PageProps } from "components/page";
import { PLACEHOLDER_IMAGE } from "lib";
import { getPageAndChildrensByUri } from "lib/api";
import Link from "next/link";
import { Grid, Image, Text, Link as UiLink } from "theme-ui";

const CosaFacciamo = (props: PageProps) => {
  const childrenPages = props.data.page?.children?.nodes ?? [];
  return (
    <Page {...props}>
      <Grid columns={["auto", "1fr 1fr", "1fr 1fr 1fr"]} gap={2}>
        {childrenPages.map(({ slug, featuredImage, title }) => (
          <Link key={slug} href={`/cosa-facciamo/${slug}`} passHref>
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
                src={featuredImage?.node?.sourceUrl ?? PLACEHOLDER_IMAGE}
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
                {title}
              </Text>
            </UiLink>
          </Link>
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
