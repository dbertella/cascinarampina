/** @jsxRuntime classic */
/** @jsx jsx */
import Link from "next/link";
import { Flex, Image, NavLink, MenuButton, jsx, Box } from "theme-ui";
import { ReactNode, useState } from "react";
import { useRouter } from "next/router";

const MenuLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactNode;
}) => {
  const router = useRouter();

  if (router.pathname === href) {
    return (
      <NavLink
        sx={{
          fontSize: [3, null, 2],
          p: 2,
          color: "primary",
        }}
        {...rest}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <Link href={href} passHref>
      <NavLink
        sx={{
          fontSize: [3, null, 2],
          p: 2,
          color: "text",
        }}
        {...rest}
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
      <Flex sx={{ justifyContent: "center", zIndex: 3 }}>
        <MenuLink href="/" aria-label="Logo Cascina Rampina" sx={{ py: 0 }}>
          <Image
            src="/images/logo.png"
            alt="Azienda Agricola Cascina Rampina"
          />
        </MenuLink>
      </Flex>
      <Box
        sx={{
          display: [isActive ? "flex" : "none", null, "flex"],
          position: ["fixed", null, "static"],
          top: 0,
          left: 0,
          right: 0,
          bottom: -90,
          py: [90, null, 0],
          bg: ["background", null, "transparent"],
          flexDirection: ["column", null, "row"],
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/dove-siamo">Dove Siamo</MenuLink>
        <MenuLink href="/chi-siamo">Chi Siamo</MenuLink>
        <MenuLink href="/cosa-facciamo">Cosa Facciamo</MenuLink>
        <MenuLink href="/categorie-prodotti">Prodotti</MenuLink>
        <MenuLink href="/faq">FAQ</MenuLink>
        <MenuLink href="/contatti">Contatti</MenuLink>
        <MenuLink href="/news">News</MenuLink>
      </Box>
      <MenuButton
        aria-label="Toggle Menu"
        onClick={toggleMenu}
        sx={{
          display: ["flex", null, "none"],
          backgroundColor: "mutedTransparent",
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
