import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
   
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img className="footer-logo" src={logo} alt="" />
                        <p>Fusce non nulla quis leo lobortis porttitor. Quisque mi egestas nibh porttitor molestie. Nullam ut orci elit. Suspendisse tincidunt dapibu In nibh es posuere.</p>
                        <h6>Social Link:</h6>
                        <div className="footer-social-link">
                            <Link to="//www.facebook.com/" target="_blank"> <i className="fab fa-facebook-f"></i></Link>
                            <Link to="//www.twitter.com/" target="_blank"><i className="fab fa-twitter"></i></Link>
                        </div>

                    </div>
                    <div className="col-md-2">
                        <h5>Quick Link :</h5>
                        <ul className="quick-link">
                            <li>Home</li>
                            <li>About</li>
                            <li>Services</li>
                            <li>Reviews</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h5>Terms and Legal</h5>
                        <ul className="quick-link">
                            <li>Terms Of Usage</li>
                            <li>Copyrights</li>
                            <li>Customer Login</li>
                            <li>Cookie Policy</li>
                            <li>How to Contact</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h5>Working Hours :</h5>
                    <table className="table">
                        <tbody>
                            <tr>
                                <th>MON</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>TUE</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>WED</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>THU</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>FRI</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>SAT</th>
                                <td>9.00-19.00</td>
                            </tr>
                            <tr>
                                <th>SUN</th>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;