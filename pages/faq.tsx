import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib/api";

const Faq = (props: PageProps) => <Page {...props} />
export default Faq;

export async function getStaticProps() {
  const data = await getPageByUri("faq");
  return {
    props: { data },
  };
}
