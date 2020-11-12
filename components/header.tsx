import Link from "next/link";
import { Flex, Image, NavLink, MenuButton, Box } from "theme-ui";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'

const mobileLinksStyle = {
  fontSize: [3, null, 2],
  my: [2, null, 0],
  py: [1, 2],
  px: 2,
};

export default function Header() {
  const router = useRouter();
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    const method = isActive ? 'remove' : 'add';
    document?.body?.classList?.[method]("overflow-hidden");

    setActive(!isActive);
  };

  useEffect(() => {
    const onRouterChange = () => {
      setActive(!isActive)
      document?.body?.classList?.remove?.("overflow-hidden");
    }

    router.events.on("routeChangeComplete", onRouterChange);
    return () => {
      router.events.off("routeChangeComplete", onRouterChange);
    };
  }, [router.events]);

  return (
    <Flex
      sx={{
        boxShadow: (t) => `0 0 25px ${t.colors.primaryTransparent}`,
        flexFlow: ["row", null, "column"],
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Flex sx={{ justifyContent: "center", px: 2, zIndex: 3 }}>
        <Link href="/">
          <a aria-label="Logo Cascina Rampina">
            <Image
              src="/images/logo.png"
              alt="Azienda Agricola Cascina Rampina"
            />
          </a>
        </Link>
      </Flex>
      <Box
        as="nav"
        sx={{
          justifyContent: "center",
          display: [isActive ? "flex" : "none", null, "flex"],
          position: ["fixed", null, "static"],
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: ["background", null, "transparent"],
          zIndex: 2,
          flexDirection: ["column", null, "row"],
          alignItems: "center",
        }}
      >
        <Link activeClassName='active' href="/" passHref>
          <NavLink sx={mobileLinksStyle}>Home</NavLink>
        </Link>
        <Link activeClassName='active' href="/dove-siamo" passHref>
          <NavLink sx={mobileLinksStyle}>Dove Siamo</NavLink>
        </Link>
        <Link activeClassName='active' href="/chi-siamo" passHref>
          <NavLink sx={mobileLinksStyle}>Chi Siamo</NavLink>
        </Link>
        <Link activeClassName='active' href="/cosa-facciamo" passHref>
          <NavLink sx={mobileLinksStyle}>Cosa Facciamo</NavLink>
        </Link>
        <Link activeClassName='active' href="/contatti" passHref>
          <NavLink sx={mobileLinksStyle}>Contatti</NavLink>
        </Link>
        <Link activeClassName='active' href="/categorie-prodotti" passHref>
          <NavLink sx={mobileLinksStyle}>Prodotti</NavLink>
        </Link>
        <Link activeClassName='active' href="/faq" passHref>
          <NavLink sx={mobileLinksStyle}>FAQ</NavLink>
        </Link>

        <Link activeClassName='active' href="/news" passHref>
          <NavLink sx={mobileLinksStyle}>News</NavLink>
        </Link>
      </Box>
      <MenuButton
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        sx={{
          display: ["block", null, "none"],
          backgroundColor: "mutedTransparent",
          mx: 2,
          zIndex: 3,
          ":hover": {
            backgroundColor: "mutedTransparent",
          },
        }}
      />
    </Flex >
  );
}
