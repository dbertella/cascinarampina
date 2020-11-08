import Link from "next/link";
import { Box, Flex, Image, NavLink, Button } from "theme-ui";

import React, { useState } from "react";
import MEDIA_QUERY from "../constants/mq.js";


export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    const bodyClasses = document && document.body.classList
    setActive(!isActive)

    isActive ? bodyClasses.remove('overflow-hidden') : bodyClasses.add('overflow-hidden');
  }

  const mobileLinksStyle = {
    [MEDIA_QUERY.mobile]: {
      fontSize: 18, 
      margin: 2
    }
  }

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
        className={isActive ? "d-flex" : ''}
        sx={{
          justifyContent: "center",
          [MEDIA_QUERY.mobile]: {
            display: 'none',
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            bg: 'background',
            zIndex: 100,
            top: 100,
            flexDirection: 'column',
            alignItems: 'center',
          } 
        }}>
        <Link href="/" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Home</NavLink>
        </Link>
        <Link href="/dove-siamo" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Dove Siamo</NavLink>
        </Link>
        <Link href="/chi-siamo" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Chi Siamo</NavLink>
        </Link>
        <Link href="/cosa-facciamo" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Cosa Facciamo</NavLink>
        </Link>
        <Link href="/contatti" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Contatti</NavLink>
        </Link>
        <Link href="/categorie-prodotti" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>Prodotti</NavLink>
        </Link>
        <Link href="/faq" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>FAQs </NavLink>
        </Link>

        <Link href="/news" passHref>
          <NavLink sx={mobileLinksStyle} p={2}>News</NavLink>
        </Link>
      </Flex>
      <Button
        className="burger-menu"
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
          ':hover': {
            backgroundColor: t => t.colors.mutedTransparent,
          },
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
