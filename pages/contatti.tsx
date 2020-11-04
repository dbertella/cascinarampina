import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib/api";

const Contatti = (props: PageProps) => <Page {...props} />
export default Contatti;

export async function getStaticProps() {
  const data = await getPageByUri("contatti");
  return {
    props: { data },
  };
}
