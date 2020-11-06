import CookieConsent from "react-cookie-consent";
import Footer from "./footer";
import Meta from "./meta";
import { FC } from "react";
import Header from "./header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <CookieConsent buttonText="Ho Capito">
        Questo sito utilizza cookie tecnici ed analitici, anche di terze parti,
        necessari al funzionamento del sito ed al miglioramento dell’esperienza
        di navigazione dell’utente.
      </CookieConsent>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
