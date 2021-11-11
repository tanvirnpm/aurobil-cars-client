import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-light">
            <div className="container py-5">
                <div className="row g-3">
                    <div className="col-md-3 text-center text-md-start">
                        <h2>About Us</h2>
                        <p>Aurobil Car's Ltd is a family owner business started its journey back in the year 2021. We are the pioneer in importing recondition vehicles from japan. We are directly recondition car import from japan by real auction.</p>
                    </div>
                    <div className="col-md-3 text-center text-md-start">
                        <h2>Top Brand</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/">Toyota</Link></li>
                            <li><Link to="/">Honda</Link></li>
                            <li><Link to="/">Nissan</Link></li>
                            <li><Link to="/">Mazda</Link></li>
                            <li><Link to="/">Mitsubishi</Link></li>
                            <li><Link to="/">Subaru</Link></li>
                            <li><Link to="/">Suzuki</Link></li>
                            <li><Link to="/">Kia</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center text-md-start">
                        <h2>Menu</h2>
                        <ul className="list-unstyled">
                            <li><Link to="/stock-list">Stock List</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact-us">Contact Us</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-center text-md-end">
                        <h2>Contact</h2>
                        <h6>(+88) 01000-000000 <i className="fa-solid fa-square-phone"></i></h6>
                        <p>Ka-000, Vatara, Dhaka <i className="fa-solid fa-location-dot"></i></p>

                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-center text-md-start">Copyright &copy; 2020 Aurobil Car's All rights reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-inline text-md-end text-center">
                            <li className="list-inline-item"><i className="fa-brands fa-facebook-square"></i></li>
                            <li className="list-inline-item"><i className="fa-brands fa-youtube"></i></li>
                            <li className="list-inline-item"><i className="fa-brands fa-twitter-square"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;