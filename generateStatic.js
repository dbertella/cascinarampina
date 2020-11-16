const fs = require("fs");
const globby = require("globby");
const path = require("path");

const lambdaPagesFilePath = path.join(__dirname, '.', 'lib', 'pages.json');

(async () => {
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

  fs.writeFileSync(lambdaPagesFilePath, JSON.stringify(pages, null, 2), {
    encoding: "utf-8",
  });
  console.log(`Built ${lambdaPagesFilePath}`);

  process.exit(0);
})();
