import React from "react";
import Header from "./header";
import HamburgerMenu from "./hamburgerMenu";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HamburgerMenu />
      {/* Agregamos 'pt-10' o un estilo directo para asegurar el espacio */}
      <main className="flex-grow" style={{ marginTop: '10px' }} >
        {children}
      </main> 
    </div>
  );
};

export default Layout;