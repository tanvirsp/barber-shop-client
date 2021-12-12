import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <main className="container">
            <img src="" alt="" />
           <h5>HAIR &amp; BREAD </h5>
           <div className="bottom-line shape-div"> </div>
           
           <h1>Welcome to the <br/> <span className="brand">BRAND HAIR CUT</span></h1>
           <button  className="btn-brand"><a style={{color:"white"}} href="#services"> MAKE AN APPOINTMENT NOW</a></button>
            
        </main>
    );
};

export default HeroSection;