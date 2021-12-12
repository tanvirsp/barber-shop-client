import React from 'react';

const AppointmentList = ({appointment, index}) => {
    const {name, email, address, phone, service, barber, status, price, date, time, _id} = appointment;
    const {id} = appointment.paymentInfo;
    

    const handleStatus = e =>{
        console.log(e.target.value);
        const updateStatus = {
            status: e.target.value
        }

        fetch(`https://stormy-thicket-33100.herokuapp.com/statusUpdate/${_id}`, {
            method : 'PATCH',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(updateStatus)
        })
        .then(res => res.json())
        .then(data =>console.log(data))
        

    }



   
    return (
        <tr>
            <td>{1+index}</td>
            <td>
                <h6>{name}</h6>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{address}</p>
            </td>
            <td>
                <h6>{service}</h6>
                <p>Barber:<b> {barber}</b></p>
                <p>$ {price}</p>
                <p>Date: {date}</p>
                <p>Time : {time}</p>
                <p>Payment Id  :  {id} </p>
            </td>
            <td>
                
                <select onChange={handleStatus}>
                   <option defaultValue={status} selected>{status}</option>
                   {status !== "Panding" &&  <option value="Panding">Pending</option>}
                   {status !== "On Going" &&  <option value="On Going">On Going</option>}
                   {status !== "Done" &&  <option value="Done">Done</option>}
                </select>
            </td>
        </tr>
    );
};

export default AppointmentList;