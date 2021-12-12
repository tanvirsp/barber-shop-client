import React from 'react';
import './About.css';
import abougBg  from '../../../images/about-bg.png';



const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>WELCOME TO THE BOARD</h5>
                        <h3>WE ARE BARBER SHOP</h3>
                        <p className="mt-4">
                            The Brand Hair Cut is used to be greater than simply an area to get a hairstyle or cut; it was a center of the community where people came together to bond, to socialize and to exchange suggestions. With the goal of bringing this camaraderie back in style, Barber Shop, a barber store and shop with places in New york city. Thanks for support Barber Shop!
                        </p>
                    </div>
                    <div className="col-md-5 d-flex justify-content-end">
                        <img className="img-fluid moc-up" src={abougBg} alt="pic" />
            
                        
                    </div>

                    <div className="col-md-3 about-middle align-self-start">
                        <h5>WORKING HOURS</h5>
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
            

        </section>
    );
};

export default About;