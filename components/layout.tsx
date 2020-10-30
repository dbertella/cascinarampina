import Footer from "./footer";
import Meta from "./meta";
import { FC } from "react";
import Header from "./header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
