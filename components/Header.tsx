/* eslint-disable @next/next/no-img-element */
import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Navbar />
      <img src="logocyd.png" alt="logo" width={200} />
    </header>
  );
};

export default Header;
