import React from "react";

import "./Header.scss";

import Navbar from "./NavBar/Navbar";

const Header = () => {
  return (
    <header>
      <div>
        <p>FaleMais</p>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
