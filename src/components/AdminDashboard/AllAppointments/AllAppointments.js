import React from 'react';
import { useEffect, useState } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';
import './AllAppointments.css'

const AllAppointments = () => {
    const [allAppointments, setAllAppointments] = useState([]);



    useEffect ( ()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/allAppointments')
        .then( res => res.json())
        .then(data => {
            setAllAppointments(data);

        });

    },[])

  

    return (
        <div className="appointment-container">
           <table className=" table table-striped">
                <thead>
                    <tr className='bg-dark'>
                    <th scope="col">#</th>
                    <th scope="col">Customer Details</th>
                    <th scope="col">Service Details</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allAppointments.map((appointment, index)=><AppointmentList  appointment={appointment} 
                                                                                    key ={index} index={index}
                                                                                
                                                                                    />)
                    }
                   
                </tbody>
            </table>





        </div>
    );
};

export default AllAppointments;