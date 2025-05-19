import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[70vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;