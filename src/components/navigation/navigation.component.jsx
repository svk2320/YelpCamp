import React from "react";
import { Outlet } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <div className="lg:ps-40 lg:pt-6">
        <img src={Logo} alt="logo" />
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
