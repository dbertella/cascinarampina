import * as path from "path";
import globby from "globby";

import { NextApiRequest, NextApiResponse } from "next";
import {
  getAllPostsWithSlug,
  getAllProductCategoriesWithSlug,
  getAllProductsWithSlug,
} from "lib";

type EdgeSlug = {
  edges: { node: { slug: string } }[];
};

const lambdaPagesFilePath = path.join(__dirname, ".", "lib", "sitemap.xml");

const createSitemap = (
  routes: string[]
) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => `<url><loc>https://cascinarampina.it${route}</loc></url>`)
      .join("")}
    </urlset>`;

async function getSlugsFromNamedApi(api: () => Promise<any>, name: string) {
  const newsEdge = (await api()) as EdgeSlug;
  return newsEdge.edges.map(({ node }: any) => `${name}${node.slug}`);
}

async function fetchPages() {
  const globbs = await globby([
    "pages/**/*.tsx",
    "!pages/api",
    "!pages/**/\\[*\\].tsx",
    "!pages/**/*.xml.tsx",
  ]);

  const pages = globbs
    .map((route) =>
      route.replace("pages", "").replace(".tsx", "").replace("/index", "")
    )
    .sort();

  const news = await getSlugsFromNamedApi(getAllPostsWithSlug, `/news/`);
  const productCategories = await getSlugsFromNamedApi(
    getAllProductCategoriesWithSlug,
    `/categorie-prodotti/`
  );
  const products = await getSlugsFromNamedApi(
    getAllProductsWithSlug,
    `/prodotti/`
  );

  const sitemap = createSitemap([
    ...pages,
    ...products,
    ...productCategories,
    ...news,
  ]);

  console.log(`Built ${lambdaPagesFilePath}`);

  return sitemap;
}

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const siteMap = await fetchPages();
  res.setHeader("Content-Type", "application/xml");
  res.status(200).send(siteMap);
};
