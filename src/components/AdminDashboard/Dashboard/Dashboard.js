import React, { useState } from 'react';
import AddService from '../AddService/AddService';
import AllAppointments from '../AllAppointments/AllAppointments';
import AllServices from '../ManageServices/ManageServices';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import SideNavbar from '../SideNavber/SideNavbar';
import './Dashboard.css';

const Dashboard = () => {

    const [activeNav, setActiveNav] = useState("all appointments");


    return (
        <div className="container-fluid dashboard">
            <div className='row'>
                <div className="col-md-2 text-center">
                    <SideNavbar activeNav ={activeNav}  setActiveNav={setActiveNav} />
                
                </div>
                <div className="col-md-10 p-5 bg-light ">
                    <div className="dashboard-container">
                        {
                            activeNav === "all appointments" && <AllAppointments />
                        } 
                        {
                            activeNav === "manage services" && <AllServices />
                        }   
                        {
                            activeNav === "add new service" && <AddService />
                        }
                        {
                            activeNav === "make admin" && <MakeAdmin />
                        }

                    </div>
                   
                </div>            
            </div>
        </div>
    );
};

export default Dashboard;