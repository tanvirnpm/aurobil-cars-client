import React from 'react';
import { Link } from 'react-router-dom';

const DashboardMenu = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link to="/dashboard" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-info text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Dashboard</span>
                </Link>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li>
                        <Link to="/" className="nav-link px-0 align-middle">
                        <i class="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span></Link>
                    </li>
                    <li>
                        <Link to="/my-orders" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">My Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/pay"  className="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-credit-card"></i> <span className="ms-1 d-none d-sm-inline">Pay</span></Link>
                    </li>
                    <li>
                        <Link to="/review"  className="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-chat-left-quote"></i> <span className="ms-1 d-none d-sm-inline">Review</span></Link>
                    </li>
                    <li>
                        <Link to="/manage-all-orders" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Manage All Orders</span></Link>
                    </li>
                    <li>
                        <Link to="/add-a-product"  className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Add A Products</span> </Link>
                    </li>
                    <li>
                        <Link to="/manage-product"  className="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid-3x3-gap-fill"></i> <span className="ms-1 d-none d-sm-inline">Manage Products</span> </Link>
                    </li>
                    <li>
                        <Link to="/make-admin" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Make Admin</span> </Link>
                    </li>
                    <li className="nav-link px-0 align-middle">
                        <i class="fs-4 bi-box-arrow-left"></i> <span className="ms-1 d-none d-sm-inline">Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardMenu;