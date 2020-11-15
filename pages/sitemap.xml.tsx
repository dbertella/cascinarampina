import { GetServerSideProps } from "next";
import {
  getAllPostsWithSlug,
  getAllProductCategoriesWithSlug,
  getAllProductsWithSlug,
} from "lib";
// import globby from "globby"; // this doens't work in prod, leaving it here if I want to use it again in the future
// const pages = await globby([
//   "pages/**/*.tsx",
//   "!pages/api",
//   "!pages/**/\\[*\\].tsx",
//   "!pages/**/*.xml.tsx",
// ]).then((all) =>
//   all.map((route) =>
//     route.replace("pages", "").replace(".tsx", "").replace("/index", "")
//   )
// );

const createSitemap = (
  routes: string[],
  host?: string
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => `<url><loc>https://${host}${route}</loc></url>`)
      .join("")}
    </urlset>`;

const Sitemap = () => {};

export default Sitemap;

type Post = {
  node: {
    slug: string;
  };
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const pages = [
    "",
    "/chi-siamo",
    "/contatti",
    "/cosa-facciamo",
    "/dove-siamo",
    "/faq",
    "/regali-natale-2020",
    "/categorie-prodotti",
    "/cosa-facciamo/alleviamo",
    "/cosa-facciamo/coltiviamo",
    "/cosa-facciamo/condividiamo",
    "/cosa-facciamo/cresciamo",
    "/cosa-facciamo/raccogliamo",
    "/cosa-facciamo/trasformiamo",
    "/cosa-facciamo/vendiamo",
    "/news",
    "/prodotti",
  ];
  const news = await getAllPostsWithSlug().then((all) =>
    all.edges.map(({ node }: Post) => `/news/${node.slug}`)
  );
  const productCategories = await getAllProductCategoriesWithSlug().then(
    (all) =>
      all.edges.map(({ node }: Post) => `/categorie-prodotti/${node.slug}`)
  );
  const products = await getAllProductsWithSlug().then((all) =>
    all.edges.map(({ node }: Post) => `/prodotti/${node.slug}`)
  );

  const sitemap = createSitemap(
    [...pages, ...products, ...productCategories, ...news],
    req.headers.host
  );

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};
