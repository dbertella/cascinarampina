import { Page, PageProps } from "components/page";
import { getPageAndChildrensByUri } from "lib/api";
import Link from "next/link";
import { Link as UiLink } from "theme-ui";

const CosaFacciamo = (props: PageProps) => {
  const childrenPages = props.data.page?.children?.edges ?? [];
  return (
    <Page {...props}>
      {childrenPages.map(({ node: { slug } }) => (
        <Link key={slug} href={`/cosa-facciamo/${slug}`} passHref>
          <UiLink p={2}>{slug}</UiLink>
        </Link>
      ))}
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
