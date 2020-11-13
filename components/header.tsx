/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { Flex, Image, NavLink, MenuButton, jsx } from "theme-ui";
import Div100vh from "react-div-100vh";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";

const MenuLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <NavLink
        sx={{
          fontSize: [3, null, 2],
          p: 2,
          color: router.pathname === href ? "primary" : "text",
        }}
      >
        {children}
      </NavLink>
    </Link>
  );
};

export default function Header() {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    if (isActive) {
      document?.body?.classList?.remove?.("overflow-hidden");
    } else {
      document?.body?.classList?.add?.("overflow-hidden");
    }
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
      <Div100vh
        sx={{
          display: [isActive ? "flex" : "none", null, "flex"],
          position: ["fixed", null, "static"],
          top: 0,
          left: 0,
          right: 0,
          pt: [90, null, 0],
          bg: ["background", null, "transparent"],
          flexDirection: ["column", null, "row"],
          alignItems: "center",
          justifyContent: ["space-evenly", null, "center"],
          height: [null, null, "auto !important"],
          zIndex: 2,
        }}
      >
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/dove-siamo">Dove Siamo</MenuLink>
        <MenuLink href="/chi-siamo">Chi Siamo</MenuLink>
        <MenuLink href="/cosa-facciamo">Cosa Facciamo</MenuLink>
        <MenuLink href="/contatti">Contatti</MenuLink>
        <MenuLink href="/categorie-prodotti">Prodotti</MenuLink>
        <MenuLink href="/news">News</MenuLink>
      </Div100vh>
      <MenuButton
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        sx={{
          display: ["block", null, "none"],
          backgroundColor: "mutedTransparent",
          px: "2px",
          mx: 2,
          zIndex: 3,
          ":hover": {
            backgroundColor: "mutedTransparent",
          },
        }}
      />
    </Flex>
  );
}
