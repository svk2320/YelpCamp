import React from 'react'
import { Outlet } from 'react-router-dom';

import Logo from '../../assets/Logo.svg';

const Nav = () => {
  return (
    <div className=''>
        <img src={Logo} alt='logo' />
        <Outlet />
    </div>
  )
}

export default Nav