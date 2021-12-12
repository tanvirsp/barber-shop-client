import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import MyAppointmentCard from '../MyAppointmentCard/MyAppointmentCard';

const MyAppointments = () => {
    const {serviceInfo, userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;


    const [myAppointments, setMyAppointments] = useState([]);

   
    useEffect( ()=>{
        fetch(`https://stormy-thicket-33100.herokuapp.com/myAppointments/?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setMyAppointments(data));

    } ,[])


    return (
        <div className="row">
            {
                myAppointments.map((appointment, index) =><MyAppointmentCard appointment={appointment} key={index} />)
            }
            
        </div>
    );
};

export default MyAppointments;