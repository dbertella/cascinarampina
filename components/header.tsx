import { Link } from "./ui";
import { ReactNode, useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./header.module.css";

const MenuLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactNode;
  [key: string]: any;
}) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(router.pathname === href);
  }, [router.pathname, href]);

  const className = isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

  if (isActive) {
    return (
      <a className={className} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} {...rest}>
      {children}
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
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <MenuLink
          href="/"
          aria-label="Logo Cascina Rampina"
          className={styles.logoLink}
        >
          <img
            src="/images/logo.svg"
            alt="Azienda Agricola Cascina Rampina"
            className={styles.logo}
          />
        </MenuLink>
      </div>
      <nav className={`${styles.nav} ${isActive ? styles.navOpen : ''}`}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/dove-siamo">Dove Siamo</MenuLink>
        <MenuLink href="/chi-siamo">Chi Siamo</MenuLink>
        <MenuLink href="/cosa-facciamo">Cosa Facciamo</MenuLink>
        <MenuLink href="/categorie-prodotti">Prodotti</MenuLink>
        <MenuLink href="/come-ordinare">Come Ordinare</MenuLink>
        <MenuLink href="/contatti">Contatti</MenuLink>
        <MenuLink href="/news">News</MenuLink>
      </nav>
      <div className={styles.menuButtonContainer}>
        <button
          className={styles.menuButton}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuText}>MENU</span>
        </button>
      </div>
    </div>
  );
}
