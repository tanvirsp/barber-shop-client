import React, { useState } from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";


const AddService = () => {
    const [spinner, setSpinner]= useState(false);
    const [imgUrl, setImgUrl] = useState(null);

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        const addService = {
            service: data.service,
            price: data.price,
            img: imgUrl,
        }
    
        

        const url=`https://stormy-thicket-33100.herokuapp.com/addService`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(addService)
        })

        .then (result => {
            result.ok && 
            alert("Service Added");
            reset();
           
            
        }) 

    };




    // uploading image to imgbb and get url link
    const  handleImageUpload = async event =>{
        setSpinner(true);
        const imageData = new FormData();
        imageData.set('key', '5db3a5ec8d1a5a41ae46727cd85094e2');
        imageData.append('image', event.target.files[0] )

        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: imageData
        })
        const data = await response.json();
        setImgUrl(data.data.display_url);
        setSpinner(false);
     
    }



    return (
        <div className="add-service-container">
            <h2 className="text-center mb-5">ADD NEW SERVICE</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
          
                <div className="row">
                    <div>
                        <label htmlFor="service">Service Name</label>
                        <input {...register("service")} />

                        <label htmlFor="price">Service Price</label>
                        <input type="number" {...register("price")} />

                        

                        <label htmlFor="service-img">Add Service Picture</label>
                        <input name="service-img" type="file" onChange={handleImageUpload}/>
                    </div>
                    
                </div>
      
                {/* condition submit button */}
                {imgUrl === null ? <input type="submit" disabled="disabled" style={{backgroundColor:"#f7f7f7", color:"#BDC3C7" }} /> : <input type="submit"/>}
            
            </form>
            {
                spinner &&  <div class="spinner-border text-warning spinner-position" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
            }
        </div>
    );
};

export default AddService;