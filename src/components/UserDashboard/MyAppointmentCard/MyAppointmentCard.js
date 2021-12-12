import React from 'react';
import './MyAppointmentCard.css'

const MyAppointmentCard = ({appointment}) => {


    let statusColor ={
        color: 'black',
        border: '1px solid black'
    }

    if (appointment.status ==="On Going"){
        statusColor ={
            color: 'blue',
            border: '1px solid blue'
        }
    } else if (appointment.status ==="Done"){
        statusColor ={
            color: 'green',
            border: '1px solid green'
        }

    }
   

    
    return (
        <div className="col-md-4 ">
            <div className="custon-card">
                <div className="status">
                    <p style={statusColor}>{appointment.status} </p>
                </div>
               
                <h6>Service: {appointment.service}</h6>
                <p>Data: {appointment.date} </p>
                <p>Time: {appointment.time} </p>
                <p>Barber: {appointment.barber} </p>
                
            </div>
            
        </div>
    );
};

export default MyAppointmentCard;