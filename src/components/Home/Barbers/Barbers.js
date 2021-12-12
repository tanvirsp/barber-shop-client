import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import barber1 from '../../../images/barber-1.jpg';
import barber2 from '../../../images/barber-2.jpg';
import barber3 from '../../../images/barber-3.jpg';
import BarberCard from '../BarberCard/BarberCard';

const Barbers = () => {

    const barberData =[
        {
            picture: barber1 ,
            name: "JOHN DOE", 
            fb: "https://facebook.com",
            twitter:"https://facebook.com",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected materials."
        },
        {
            picture: barber2 ,
            name: "Martin COLLINCS", 
            fb: "https://facebook.com",
            twitter:"https://facebook.com",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected materials."
        },
        {
            picture: barber3 ,
            name: "Mark JOHNSON", 
            fb: "https://facebook.com",
            twitter:"https://facebook.com",
            description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected materials."
        },
        
    ]


    return (
        <section   className="container" id="reviews">
            <SectionTitle subTitle={"WE CAN MAKE YOUR AWESOMENESS "} title={"OUR BARBERS"} />

            <div className="row">
              {
                  barberData.map((barber, index) =><BarberCard barber={barber} key={index} />)
              }
            </div>

        </section>
    );
};

export default Barbers;