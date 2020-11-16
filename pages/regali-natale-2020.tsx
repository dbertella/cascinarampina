import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib";
import { FC } from "react";

const CestiNatale: FC<PageProps> = (props) => (
  <Page {...props} />
);

export default CestiNatale;

export async function getStaticProps() {
  const data = await getPageByUri("regali-natale-2020");
  console.info("regali-natale-2020 done");
  return {
    props: { data },
  };
}
