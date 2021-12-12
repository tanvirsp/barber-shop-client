import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../../App';
import './ServiceCard.css';

const ServiceCard = ({service}) => {
    const {serviceInfo} = useContext(UserContext);
    const history = useHistory();
    const [selectedService, setSelectedService] = serviceInfo;


    const handleSelectedService = id =>{
        fetch(`https://stormy-thicket-33100.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data =>{
            setSelectedService(data);
        })
        history.push('/userDashboard')
    }




    return (
        <div className="col-md-3">
            <div className="service-card">
                <div className='service-cart-top'>
                    <img src={service.img} alt="" />
                </div>
                <h4>{service.service}</h4>
                <h3 className="service-price">$ {service.price}</h3>
                <button onClick={()=>handleSelectedService(service._id)} className="btn-service">TAKE SERVICE</button>
            </div>
            
        </div>
    );
};

export default ServiceCard;