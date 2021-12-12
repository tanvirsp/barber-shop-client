import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import './Header.css';


const Header = () => {
 
    return (
        <header>          
            <Navbar />
            <HeroSection />
        </header>
    );
};

export default Header;