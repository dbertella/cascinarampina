import { GetServerSideProps } from "next";
import globby from "globby";
import {
  getAllPostsWithSlug,
  getAllProductCategoriesWithSlug,
  getAllProductsWithSlug,
} from "lib";

const createSitemap = (
  routes: string[],
  host?: string
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map((route) => `<url><loc>https://${host}${route}</loc></url>`).join("")}
    </urlset>`;

const Sitemap = () => {};

export default Sitemap;

type Post = {
  node: {
    slug: string;
  };
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const pages = await globby([
    "pages/**/*.tsx",
    "!pages/api",
    "!pages/**/\\[*\\].tsx",
    "!pages/**/*.xml.tsx",
  ]).then((all) =>
    all.map((route) =>
      route.replace("pages", "").replace(".tsx", "").replace("/index", "")
    )
  );
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
