import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Review.css';

const Review = () => {
    const [spinner, setSpinner]= useState(false);
    const [imgUrl, setImgUrl] = useState(null);



    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
       
        const reviewData = {
            name: data.name,
            designation: data.designation,
            text: data.text,
            img : imgUrl
        }


        const url=`https://stormy-thicket-33100.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(reviewData)
        })

        .then (result => {
            result.ok && 
            alert("Thanks for your Review!!");
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
        <div className="review-form">
             <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Your Name</label>
                <input {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                <label htmlFor="designation">Your Designation</label>
                <input {...register("designation", { required: true })} />
                {errors.designation && <span>This field is required</span>}

                <label htmlFor="text">Review Text</label>               
                <textarea {...register("text", { required: true })} ></textarea>
                {errors.text && <span>This field is required</span>}

                <label htmlFor="review-img">Your Picture</label>
                <input name="review-img" type="file" onChange={handleImageUpload}/>

           

                {/* condition submit button */}
                {imgUrl === null ? <input type="submit" disabled="disabled" style={{backgroundColor:"#f7f7f7", color:"#BDC3C7" }} /> : <input type="submit"/>}
            </form>

            {/* loading spinner */}
            {
                spinner &&  <div class="spinner-border text-warning spinner-position" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
            }





        </div>
    );
};

export default Review;