import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Shared/Footer';
import Navbar from '../Pages/Home/Shared/Navbar';

const Main = () => {
    return (
        <div className='w-19/20 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;