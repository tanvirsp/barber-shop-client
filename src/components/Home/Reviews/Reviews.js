import React, { useEffect, useState } from 'react';
import './Reviews.css';
import ReviewCard from '../ReviewCard/ReviewCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';


const Reviews = () => {
    const [allReviews, setAllreviews] = useState([]);

    useEffect( ()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/allReviews')
        .then(res => res.json())
        .then(data => setAllreviews(data))
    },[])


    
    useEffect( ()=>{
        AOS.init({duration: 2000});
    },[]);

    


    return (
        <section   className="container" id="reviews">
           
            <SectionTitle  subTitle={"WHAT PEOPLE SAY ABOUT US"} title={"CLIENT REVIEWS"} /> 

            <div data-aos="fade-left" className="row">
              {
                  allReviews.map((review, index) =><ReviewCard review ={review} key={index}> </ReviewCard> )
              }
            </div>

        </section>
    );
};

export default Reviews;