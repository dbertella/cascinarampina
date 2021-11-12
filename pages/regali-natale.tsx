import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib";
import { FC } from "react";

const CestiNatale: FC<PageProps> = (props) => (
  <Page {...props} />
);

export default CestiNatale;

export async function getStaticProps() {
  const data = await getPageByUri("regali-natale");
  console.info("regali-natale done");
  return {
    props: { data },
  };
}
