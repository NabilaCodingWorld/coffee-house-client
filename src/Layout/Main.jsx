import React from 'react';
import { Outlet } from 'react-router-dom';
import Share from '../Pages/Share/Share';
import Footer from '../Pages/Share/Footer';

const Main = () => {
    return (
        <div>
            <Share></Share>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;