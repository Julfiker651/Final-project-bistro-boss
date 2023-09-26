import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Layout = () => {
    const location=useLocation()
    const noheader=location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <>
          {noheader || <Header></Header>}
           <Outlet></Outlet>
          {noheader || <Footer></Footer>}
        </>
    );
};

export default Layout;