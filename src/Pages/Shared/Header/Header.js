import React from 'react';
import Banner from '../../Home/Banner/Banner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="bg-light pb-5">
            <Navbar />
            <Banner />
        </header>
    );
};

export default Header;