import React, { useEffect, useState } from 'react';
import './Services.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data))

    },[]);





    useEffect( ()=>{
            AOS.init({duration: 2000});
    },[]);


    return (
        <section className="container" id="services">
           
            <SectionTitle  subTitle={"BRAND HAIR CUT"} title={"OUR SERVICES"} /> 
            <div data-aos="fade-up" className="row">
                {
                    services.map( (service, index) =><ServiceCard service ={service} key={index}></ServiceCard>)
                }
            </div>

        </section>
    );
};

export default Services;