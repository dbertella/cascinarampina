import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib/api";
import { FC } from "react";

const DefaultPage: FC<PageProps> = (props) => <Page {...props} />;

export default DefaultPage;

export async function getStaticProps() {
  const data = await getPageByUri("cosa-facciamo/cresciamo");
  console.info("cresciamo done");
  return {
    props: { data },
  };
}
