import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../../assets/Logo.svg";

const Nav = () => {
  return (
    <>
      <div className="lg:ps-40 lg:pt-6 lg:p-0 p-8">
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;
