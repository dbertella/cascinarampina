import Link from "next/link";
import { Box, Flex, Image, NavLink } from "theme-ui";

export default function Header() {
  return (
    <Box
      sx={{
        boxShadow: (t) => `0 0 25px ${t.colors.primaryTransaprent}`,
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
      <Flex as="nav" sx={{ justifyContent: "center" }}>
        <Link href="/" passHref>
          <NavLink p={2}>Home</NavLink>
        </Link>
        <Link href="/dove-siamo" passHref>
          <NavLink p={2}>Dove Siamo</NavLink>
        </Link>
        <Link href="/dove-siamo" passHref>
          <NavLink p={2}>Contatti</NavLink>
        </Link>

        <Link href="/news" passHref>
          <NavLink p={2}>News</NavLink>
        </Link>
      </Flex>
    </Box>
  );
}
