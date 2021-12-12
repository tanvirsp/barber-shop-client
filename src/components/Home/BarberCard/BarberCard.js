import React from 'react';
import { Link } from 'react-router-dom';
import './BarberCard.css';

const BarberCard = ({barber}) => {
    const {picture, name, fb, twitter,  description} = barber;
    return (
        <div className="col-md-4 mt-5 text-center">
            <div className="barber-card">
                <img className="card-img" src={picture} alt="" />
                <div className="social-icons">
                   <Link to={fb} target="_blank"> <i className="fab fa-facebook-f"></i></Link>
                   <Link to={twitter} target="_blank"> <i className="fab fa-twitter"></i></Link>
            
                </div>
            </div>
            <div className="barber-card-info">
                <h4 className="my-3">{name}</h4>
                <small>{description}</small>
            </div>
        </div>
       
    );
};

export default BarberCard;



