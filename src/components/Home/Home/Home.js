import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import About from '../About/About';
import Barbers from '../Barbers/Barbers';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';


const Home = () => {
    return (
        < div id="home">
            <Header />
            <About />
            <Services />
            <Reviews />
            <Barbers />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;