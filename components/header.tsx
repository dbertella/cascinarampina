import Link from "next/link";
import { Flex, Image, NavLink, MenuButton, Box } from "theme-ui";

import React, { useState } from "react";

const mobileLinksStyle = {
  fontSize: [3, null, 2],
  my: [2, null, 0],
  py: [1, 2],
  px: 2,
};

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    const method = isActive ? 'remove' : 'add';
    document?.body?.classList?.[method]("overflow-hidden");

    setActive(!isActive);
  };

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
        <Link href="/" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Home</NavLink>
        </Link>
        <Link href="/dove-siamo" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Dove Siamo</NavLink>
        </Link>
        <Link href="/chi-siamo" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Chi Siamo</NavLink>
        </Link>
        <Link href="/cosa-facciamo" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Cosa Facciamo</NavLink>
        </Link>
        <Link href="/contatti" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Contatti</NavLink>
        </Link>
        <Link href="/categorie-prodotti" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>Prodotti</NavLink>
        </Link>
        <Link href="/faq" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>FAQ</NavLink>
        </Link>

        <Link href="/news" passHref>
          <NavLink onClick={toggleMenu} sx={mobileLinksStyle}>News</NavLink>
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
