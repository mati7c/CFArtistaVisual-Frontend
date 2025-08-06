import React from "react";
import Header from "./header";
import HamburgerMenu from "./hamburgerMenu";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header en la parte superior */}
      <HamburgerMenu /> {/* Menú de hamburguesa */}
      <main className="flex-grow" >{children}</main> {/* Contenido principal con margen superior */}
    </div>
  );
};

export default Layout;