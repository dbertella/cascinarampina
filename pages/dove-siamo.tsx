import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib";

const DefaultPage = (props: PageProps) => <Page {...props} />;

export default DefaultPage;

export async function getStaticProps() {
  const data = await getPageByUri("dove-siamo");
  console.info("dove-siamo done");
  return {
    props: { data },
  };
}
