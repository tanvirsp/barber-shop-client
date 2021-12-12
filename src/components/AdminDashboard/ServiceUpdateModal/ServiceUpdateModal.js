import React, { useState } from 'react';
import './ServiceUpdateModal.css';
import { useForm } from "react-hook-form";



const ServiceUpdateModal = ({loadService, setLoadModal}) => {
  const {_id, service, price, img } = loadService;
  const [updateImg, setUpdateIma] = useState(img);
  const [loadingSpinner, setLoadingSpinner] = useState(false);


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
      const onSubmit = data => {
        console.log(data);
        const updateServiceInfo ={
          service: data.service,
          price: data.price,
          img: updateImg,
        }

        fetch(`https://stormy-thicket-33100.herokuapp.com/updateService/${_id}`, {
              method: 'PATCH',
              headers: {'Content-Type' : 'application/json'},
              body:JSON.stringify(updateServiceInfo)
          })
        .then(res =>res.json())
        .then(result =>{
          result && 
          alert("Service Updated");
          setLoadModal(false);
          window.location.reload();
        })

      }





    const handleUpdateImage = async event=>{
      setLoadingSpinner(true);
        const imageData = new FormData();
        imageData.set('key', '5db3a5ec8d1a5a41ae46727cd85094e2');
        imageData.append('image', event.target.files[0] );

        const response = await fetch('https://api.imgbb.com/1/upload', {
          method: 'POST',
          body: imageData
        })
        const data = await response.json();
        setUpdateIma(data.data.display_url);
      
  
    }


   
    return (
      <div className="edit-container">
        <div className="close-btn"><i onClick={()=>setLoadModal(false)} class="fas fa-times-circle"></i></div>
        <h3>EDIT SERVICE</h3><br/>
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={handleSubmit(onSubmit)}>   
              <label htmlFor="service">Service Name</label>
              <input defaultValue={service} {...register("service")} />

              <label htmlFor="price">Service Price</label> 
              <input type="number" defaultValue={price} {...register("price")} />
              
              <input type="submit" value="UPDATE" />
            </form>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              
              <p>Your Current Image</p>
              <img className="preview-img" src={updateImg}alt="" />

              <input onChange={handleUpdateImage} type="file" />

          {/* loading spinner */}
              {
                loadingSpinner && <div class="spinner-border text-warning" role="status"></div>
              }
            
            
            </div>
          </div>
        </div>
        

      </div>
    );
};

export default ServiceUpdateModal;