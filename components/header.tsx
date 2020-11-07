import Link from "next/link";
import { Box, Flex, Image, NavLink, Button } from "theme-ui";

import React, { useState } from "react";
import MEDIA_QUERY from "../constants/mq.js";


export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => setActive(!isActive)

  return (
    <Box
      sx={{
        position: 'relative',
        boxShadow: (t) => `0 0 25px ${t.colors.primaryTransparent}`,
      }}
    >
      <Flex sx={{ justifyContent: "center" }}>
        <Link href="/">
          <a aria-label="Logo Cascina Rampina">
            <Image
              src="/images/logo.png"
              alt="Azienda Agricola Cascina Rampina"
            />
          </a>
        </Link>
      </Flex>
      <Flex
        as="nav"
        className={isActive ? "d-none" : ''}
        sx={{
          justifyContent: "center",
          [MEDIA_QUERY.mobile]: {
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: t => t.colors.background,
            zIndex: 100,
            top: 100,
            flexDirection: 'column',
            alignItems: 'center',
          } 
        }}>
        <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/dove-siamo" passHref>
          <NavLink p={2}>Dove Siamo</NavLink>
        </Link>
        <Link href="/chi-siamo" passHref>
          <NavLink p={2}>Chi Siamo</NavLink>
        </Link>
        <Link href="/cosa-facciamo" passHref>
          <NavLink p={2}>Cosa Facciamo</NavLink>
        </Link>
        <Link href="/contatti" passHref>
          <NavLink p={2}>Contatti</NavLink>
        </Link>
        <Link href="/categorie-prodotti" passHref>
          <NavLink p={2}>Prodotti</NavLink>
        </Link>
        <Link href="/faq" passHref>
          <NavLink p={2}>FAQs </NavLink>
        </Link>

        <Link href="/news" passHref>
          <NavLink p={2}>News</NavLink>
        </Link>
      </Flex>
      <Button
        onClick={toggleMenu}
        sx={{
          position: 'absolute',
          cursor: 'pointer',
          right: 20,
          top: 20,
          appearance: 'none',
          display: 'inline-block',
          textAlign: 'center',
          lineHeight: 'inherit',
          textDecoration: 'none',
          p: 2,
          backgroundColor: t => t.colors.mutedTransparent,
          [MEDIA_QUERY.d('min', 768)]: {
            display: 'none'
          }
        }}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </Button>
    </Box>
  );
}
