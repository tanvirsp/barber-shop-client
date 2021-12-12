import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] =useState(false);
    

    const [isAdmin, setIsAdmin] = useState(false);
    const {userInfo} = useContext(UserContext);
    const [loggedInUser, setLoggedInUser]= userInfo;


    useEffect( ()=>{
        fetch('https://stormy-thicket-33100.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body:JSON.stringify({email: loggedInUser.email })
        })
        .then(res => res.json())
        .then(data =>  setIsAdmin(data))

    } ,[])


    const changeBackground = ()=>{
        if(window.scrollY >= 100){
            setNavbar(true);
        }else {
            setNavbar(false);
        }
       
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <div>
            <nav className={navbar ? "navbar navbar-expand-lg navbar-dark bg-sm-dark bg-dark fixed-top" : "navbar navbar-expand-lg navbar-dark bg-sm-dark fixed-top"}>
                <div className="container">
                    <Link to ="/home"><img className="logo" src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-5 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link me-3 text-center " href='/'>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3 text-center " href='/#about'>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3 text-center"  href='/#services'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-3 text-center " href='/#reviews'>Reviews</a>
                            </li>
                            <li className="nav-item text-center">
                                <a className="nav-link me-3 text-center " href='/#contact'>Contact</a>
                            </li>
                            <li className="nav-item text-center">
                               {
                                   isAdmin ?  <Link className="nav-link me-3 login-btn" to='/admin'>Admin</Link> :
                                   loggedInUser.email ? <Link className="nav-link me-3 login-btn" to='/userDashboard'>Dashboard</Link> :
                                                        <Link className="nav-link me-3 login-btn" to='/login'>Login</Link>
                               }
                            </li>
                            
                        
                        
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
        
    );
};

export default Navbar;