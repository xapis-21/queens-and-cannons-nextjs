import React from "react";
import Navigation from "./Navigation";
import { Footer } from "./";

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      {/* <Header /> */}
      <Navigation/>
      <main>{children}</main>
      {<Footer />}
    </div>
  );
};

export default Layout;
