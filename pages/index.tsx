import { Page, PageProps } from "components/page";
import { getPageByUri } from "lib/api";
import { FC } from "react";

const Home: FC<PageProps> = (props) => <Page {...props} />;

export default Home;

export async function getStaticProps() {
  const data = await getPageByUri("homepage");
  console.info("homepage done");
  return {
    props: { data },
  };
}
