import React from 'react';

const AllServicesList = ({service, index, handleEditService, handleDeleteService}) => {
    
    return (         
        <tr>   
            <td>{index+1}</td>
            <td>{service.service}</td>
            <td>{service.price}</td>
            <td><img style={{width: "45px"}} src={service.img} alt="pic" /></td>
            <td>
                <button onClick={()=>handleEditService(service._id)} className="btn btn-success me-2"><i className="fas fa-edit"></i></button>
                <button onClick={()=>handleDeleteService(service._id)} className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
            </td>
        </tr>
    );
};

export default AllServicesList;