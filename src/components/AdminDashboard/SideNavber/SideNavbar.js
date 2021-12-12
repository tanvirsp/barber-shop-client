import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import './SideNavbar.css';
import  logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const SideNavbar = ({activeNav, setActiveNav}) => {

    const {userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;


    const history = useHistory();
    const handleGoHome =()=>{
        history.push('/home');
    }

    
    const handleActiveNav = (e) =>{
        
        const innerText = e.target.innerText;
        const textFormat = innerText.toLowerCase();
        setActiveNav(textFormat)
    }

    const handleLogOut =()=>{
        setLoggedInUser({});
        sessionStorage.removeItem('token');
    }
    

    return (
        <div className="side-nav d-flex">
            <div>
                <img className="admin-logo" src={logo} alt="" />
               
                <ul onClick={handleActiveNav}>    
                        <li className={activeNav ==="all appointments" ? "active" : ""}><i className="fas fa-list"></i>All Appointments</li>
                        <li className={activeNav ==="add new service" ? "active" : ""} ><i className="fas fa-plus"></i>Add New Service</li>
                        <li className={activeNav ==="manage services" ? "active" : ""} ><i className="fas fa-th-large"></i>Manage Services</li>
                        <li className={activeNav ==="make admin" ? "active" : ""} ><i className="fas fa-user-plus"></i>Make Admin</li> 
                </ul>
            </div>
            
           <div>
               <img className="customer-pic" src={loggedInUser.photoURL} alt="" />
               <h5>{loggedInUser.displayName}</h5>
           <button className="go-home-btn" onClick={handleGoHome}>Go Home</button>
           <button className="go-home-btn" onClick={handleLogOut}>Log Out</button>
           </div>
        </div>
    );
};

export default SideNavbar;