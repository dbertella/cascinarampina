module.exports = {
  async redirects() {
    return [
      {
        source: "/orto-in-cassetta",
        destination: "/categorie-prodotti/verdure-e-frutta",
        permanent: true,
      },
      {
        source: "/chisiamo",
        destination: "/chi-siamo",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contatti",
        permanent: true,
      },
      {
        source: "/ilmonticello",
        destination: "/categorie-prodotti/gelati-e-il-monticello",
        permanent: true,
      },
      {
        source: "/conserve",
        destination: "/categorie-prodotti/bonta-sottovetro",
        permanent: true,
      },
      {
        source: "/comunicazioni.html",
        destination: "/news/comunicazioni",
        permanent: true,
      },
    ];
  },
};
