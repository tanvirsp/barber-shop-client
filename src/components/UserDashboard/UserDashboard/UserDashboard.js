import React, { useContext,  useState } from 'react';
import './UserDashboard.css';
import AddAppointment from '../AddAppointment/AddAppointment';
import Review from '../Review/Review';
import logo from '../../../images/logo-color.png';
import { useHistory } from 'react-router';
import MyAppointments from '../MyAppointments/MyAppointments';
import { UserContext } from '../../../App';
import Navbar from '../../Shared/Navbar/Navbar';

const UserDashboard = () => {
    const {userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;

    const history = useHistory();

    const [activeNav, setActiveNav] = useState("add appointment");

    const handleActiveNav =(e) =>{
        const innerText = e.target.innerText;
        setActiveNav(innerText.toLowerCase());
    }

    const handleGoHome =()=>{
        history.push('/');
    }
    
    const handleLogOut =()=>{
        setLoggedInUser({});
        sessionStorage.removeItem('token');

    }

    

    return (
        <div>
        
            <div className="container  my-5  p-5 rounded border border-1 user-dashboard ">
                <div className="d-flex align-items-center user-info py-2">
                    <img src={loggedInUser.photoURL} alt="user-pic" />
                    <h3>Hello, <b>{loggedInUser.displayName} </b></h3>
                    
                </div>
                <hr />


                <div className="row">
                    <div className="col-md-3 text-center ">
                        <div className="user-side-nav">
                            <ul onClick={handleActiveNav}>
                                <li  className={activeNav ==="add appointment" ? "active" : ""}><i className="far fa-calendar-alt"></i>Add Appointment</li>
                                <li  className={activeNav ==="my appointments" ? "active" : ""}><i className="far fa-list-alt"></i>My Appointments</li>
                                <li  className={activeNav ==="review" ? "active" : ""}><i className="far fa-thumbs-up"></i>Review</li>
                            </ul>

                            <div className="user-action">
                                <button onClick={handleLogOut}>Log Out</button>
                                <button onClick={handleGoHome}>Go HOME</button>
                            </div>
                            <img style={{width:"200px", marginTop: "20px"}} src={logo} alt="" />

                        </div>

                    
                    
                    </div>
                    <div className="col-md-9">
                    <div className="ps-5">
                            {
                                activeNav === 'add appointment' && <AddAppointment />
                            }
                            {
                                activeNav === 'my appointments' && <MyAppointments />
                            }
                            {
                                activeNav === 'review' && <Review />
                            }
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default UserDashboard;