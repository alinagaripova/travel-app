import React from "react";

import Header from "../Header";
import Footer from "../Footer";
import Search from "../Search/search";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/* <Search /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
