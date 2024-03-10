import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made by <b>Joe</b>
      </span>
    </footer>
  );
};

export default Footer;
