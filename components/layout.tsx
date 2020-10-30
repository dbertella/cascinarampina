import Footer from "./_footer";
import Meta from "./meta";
import { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
