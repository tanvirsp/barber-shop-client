import React from 'react';
import './ReviewCard.css';

const ReviewCard = ({review}) => {
    const {text, img, name, designation} = review;

    
    return (
        <div className="col-md-4 mt-5">
            <div className="review-card-item">
                <small>{text}</small>
                <div className="d-flex align-items-center mt-5">
                    <img className="img-fluid img-thumbnail rounded-circle w-25" src={img} alt="" />
                    <div className="ms-3">
                        <h5>{name}</h5>
                        <p>{designation}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;