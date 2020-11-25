const fs = require("fs");
const globby = require("globby");
const path = require("path");

const {
  getAllPostsWithSlug,
  getAllProductCategoriesWithSlug,
  getAllProductsWithSlug,
} = require("./lib"); // this doesn't work because typescript and/or es6 modules MODULE_NOT_FOUND

// const getAllPostsWithSlug = require("./lib/news");

const lambdaPagesFilePath = path.join(__dirname, ".", "lib", "sitemap.xml");

const createSitemap = (routes, host) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map((route) => `<url><loc>https://cascinarampina.it${route}</loc></url>`)
      .join("")}
    </urlset>`;

(async () => {
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

  const news = (await getAllPostsWithSlug()).edges.map(
    ({ node }) => `/news/${node.slug}`
  );

  const productCategories = (await getAllProductCategoriesWithSlug()).edges.map(
    ({ node }) => `/categorie-prodotti/${node.slug}`
  );

  const products = (await getAllProductsWithSlug()).edges.map(
    ({ node }) => `/prodotti/${node.slug}`
  );

  const sitemap = createSitemap(
    [...pages, ...products, ...productCategories, ...news],
    req.headers.host
  );

  fs.writeFileSync(lambdaPagesFilePath, JSON.stringify(pages, null, 2), {
    encoding: "utf-8",
  });
  console.log(`Built ${lambdaPagesFilePath}`);

  process.exit(0);
})();
