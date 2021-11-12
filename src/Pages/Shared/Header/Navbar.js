import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user } = useAuth();
    console.log('context user', user)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Aurobil Cars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav text-md-left text-center m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/stock-list">Stock List (Explore)</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact Us</Link>
                        </li>
                        {user.email && <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                        </li>}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/stock-list">Stock List</Link>
                        </li> */}
                    </ul>
                <div className="navbar-nav">
                    {user?.email && <div className="d-flex align-items-center mb-3 mb-md-0 justify-content-center">
                        <img style={{height: '40px', width: '40px', borderRadius: '50%'}} src={user?.image} alt="" />
                        <span className="mx-3"><i>{user?.name}</i></span>
                    </div>}
                    {user?.email ? <button className="btn btn-outline-danger">Logout</button> : <Link to="/login" className="btn btn-outline-info">Login</Link>}
                    {/* <Link className="btn btn-outline-danger">Logout</Link> */}
                </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;