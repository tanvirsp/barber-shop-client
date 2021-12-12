import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-section">
            <div className="nav-bar-section">
                <Navbar />
            </div>
           <div>
            <h1 className="text-center p-5">Sorry, Page not Found</h1>
           </div>
        </div>
    );
};

export default NotFound;