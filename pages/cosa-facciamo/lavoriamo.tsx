import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib";
import { FC } from "react";

const DefaultPage: FC<PageProps> = (props) => <Page {...props} />;

export default DefaultPage;

export async function getStaticProps() {
  const data = await getPageByUri("cosa-facciamo/lavoriamo");
  console.info("lavoriamo done");
  return {
    props: { data },
  };
}
