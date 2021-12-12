import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import contactPic from '../../../images/contactPic.jpg';



const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className="container-fluid" id="contact">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <img className="img-fluid" src={contactPic} alt="" />

                    </div>
                    <div className="col-md-5">
                        <div className=" contact-us">
                            <h3>Contact Us</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input  placeholder="Your Name"  type="text" {...register("name")} />
                                <input placeholder="Your Email" type="email" {...register("email",)} />
                                <input  placeholder="Phone Number" type="number" {...register("phone", )} />
                                <textarea  placeholder="Message" {...register("message", )} />
                                <input type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Contact;