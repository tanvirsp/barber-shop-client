import React, { useContext, useState } from 'react';
import './AddAppointment.css';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import StripeContainer from '../Payment/StripeContainer';

const AddAppointment = () => {

    const {serviceInfo, userInfo} = useContext(UserContext);
    const [selectedService, setSelectedService] = serviceInfo;
    const [loggedInUser, setLoggedInUser] = userInfo;

    const [shippingData, setShippingData] = useState(null);
    


    const { register, handleSubmit, formState: { errors } } = useForm();

    //set order data in state
    const onSubmit = data =>{
        setShippingData(data);  
    };


    const handlePaymentProcess = (paymentInfo)=> {
        const orderInformation = {
            service: selectedService.service,
            price: selectedService.price,
            email: loggedInUser.email,
            status: "Panding",
        }
        const allOrderInfo = { ...shippingData, ...orderInformation, ...{paymentInfo}};

        fetch('https://stormy-thicket-33100.herokuapp.com/addAppointment', {
            method : 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(allOrderInfo)
        })
        .then(result =>console.log(result));


    };





     const options = [
        {
          label: "JOHN DOE",
          value: "John Doe",
        },
        {
          label: "Martin COLLINCS",
          value: "Martin Collincs",
        },
        {
          label: "Mark JOHNSON",
          value: "Mark Johnson",
        },
      ];

    

    return (
    <div>
        <div className="row" style={{display: shippingData ? "none" : "block"}} >
            <div className="add-appointment-section">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <label htmlFor="name">Your Name</label>
                    <input {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}

                    <label htmlFor="phone">Phone</label>
                    <input type="tel" {...register("phone", { required: true })} />
                    {errors.phone && <span>This field is required</span>}

                    <label htmlFor="address">Address</label>
                    <input type="text" {...register("address",{ required: true })} />
                    {errors.address && <span>This field is required</span>}

                   <div className="row">
                        <div className="col-md-4">
                            <label htmlFor="date">Select Date</label>
                            <input type="date" {...register("date", { required: true })} />
                            {errors.date && <span>This field is required</span>}
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="time">Select Time</label>
                            <select {...register("time", { required: true })}>
                                <option value="10.00-11.00am" >10.00-11.00 AM</option>
                                <option value="11.30-12.30am" >11.30-12.30 AM</option>
                                <option value="1.00-2.00pm" >1.00-2.00 PM</option>
                                <option value="4.00-5.00pm" >4.00-5.00 PM</option>
                                <option value="5.30-6.30pm" >5.30-6.30 PM</option>
                                <option value="7.00-8.00pm" >7.00-8.30 PM</option>
                            </select>
                            {errors.time && <span>This field is required</span>}

                        </div>
                        <div className="col-md-4">
                            <label htmlFor="barber">Select Barber</label>
                            <select {...register("barber", { required: true })}>
                                {options.map((option, index) => (
                                <option value={option.value} key={index}>{option.label}</option>
                                ))}
                            </select>
                            {errors.barber && <span>This field is required</span>}
                        </div>
                   </div>
             
                    <input type="submit" value="Process To Payment" />
                </form>
                <div className="services-section">
                    {
                        selectedService !== null ? 
                        <div>
                            <p>Selected Service :</p>
                            <h5> Service: {selectedService.service}</h5>
                            <h5>Price: ${selectedService.price}</h5>
                        </div> 
                    : 
                    <div>
                        <h5>Plese Select A Service First</h5>
                    </div>
                    }
                </div>

            </div>
        </div>

{/* Payment System */}
       
        <div className="row payment-section"  style={{display: shippingData ? "block" : "none"}}>
            <h5 className="mb-3">Card Information</h5> 
            <StripeContainer handlePaymentProcess={handlePaymentProcess}/>
        </div>
    </div>
    );
};

export default AddAppointment;