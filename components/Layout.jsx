import React from "react";
import { Header, Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
