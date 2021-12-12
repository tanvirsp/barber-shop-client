import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState(null);
    

    const handleValue =(e)=>{
        const makeAdmin = {
            [e.target.name] : e.target.value
        }
        setAdminEmail(makeAdmin);
    }

    
    const handleButton =()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/setAdmin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify(adminEmail)
        })
        .then(res => res.json())
        .then(data =>{
            data.acknowledged && alert(`${adminEmail.email}  is Added as Admin`)
            setAdminEmail();
        }) 

    }

    return (
        <div className="admin-section">
           
                <input onBlur={handleValue} defaultValue={adminEmail} type="text" name="email" placeholder="Add An Email To Admin" />
                <input onClick={handleButton} type="button" value="Make An Admin" />
           
        </div>
    );
};

export default MakeAdmin;