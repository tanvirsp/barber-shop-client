import React, { useEffect, useState } from 'react';
import AllServicesList from '../AllServicesList/AllServicesList';
import ServiceUpdateModal from '../ServiceUpdateModal/ServiceUpdateModal';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [loadService, setLoadService] = useState({});
    const[loadModal, setLoadModal] = useState(false);

    console.log(loadService);


    useEffect( ()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/services')
        .then(res => res.json())
        .then(data=>setServices(data))

    },[]);


    
//Load Single Service from Database to Edit
    const handleEditService = (id)=>{
        fetch(`https://stormy-thicket-33100.herokuapp.com/service/${id}`)
        .then(res => res.json())
        .then(data =>{
            setLoadService(data);
            setLoadModal(true);
        })
    };



//Delete Service from Database
    const handleDeleteService = (id)=>{
       fetch(`https://stormy-thicket-33100.herokuapp.com/deleteService/${id}`, {
           method: 'DELETE',
       })
       .then (res => res.json())
       .then(result => {
           result && alert("Deleted Successfully")
           window.location.reload();
       })
    }



    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Service</th>
                    <th scope="col">Price</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map( (service, index) =><AllServicesList 
                                                        service ={service} key={index} index={index}
                                                        handleEditService ={handleEditService}
                                                        handleDeleteService={handleDeleteService}
                                                        />)
                    }
                </tbody>
            </table>
            
            {
                loadModal && <ServiceUpdateModal setLoadModal={setLoadModal} loadService ={loadService} />
            }

        
        </div>

       
            
       
    );
};

export default ManageServices;