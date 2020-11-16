import { GetServerSideProps } from "next";
import {
  getAllPostsWithSlug,
  getAllProductCategoriesWithSlug,
  getAllProductsWithSlug,
} from "lib";
import pages from "lib/pages.json";

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

type WithSlug = {
  node: {
    slug: string;
  };
};

export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {
  const news = await getAllPostsWithSlug().then((all) =>
    all.edges.map(({ node }: WithSlug) => `/news/${node.slug}`)
  );
  const productCategories = await getAllProductCategoriesWithSlug().then(
    (all) =>
      all.edges.map(({ node }: WithSlug) => `/categorie-prodotti/${node.slug}`)
  );
  const products = await getAllProductsWithSlug().then((all) =>
    all.edges.map(({ node }: WithSlug) => `/prodotti/${node.slug}`)
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
