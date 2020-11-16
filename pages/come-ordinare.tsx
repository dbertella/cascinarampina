import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib";

const Faq = (props: PageProps) => <Page {...props} />
export default Faq;

export async function getStaticProps() {
  const data = await getPageByUri("come-ordinare");
  return {
    props: { data },
  };
}
