import React from 'react';
import { Link } from 'react-router-dom';
import SmallSearchPanel from './SmallSearchPanel';

const Banner = () => {
    return (
        <main className="container py-4">
            <div className="row align-items-center text-sm-left text-lg-left">
                <div className="col-md-6 mb-3 text-md-start text-center">
                    <h1>Find your <br />dream car</h1>
                    <p>We can help you find the best car. Check our reviews, compare models and find cars for sale.</p>
                    <Link to="/about-us" className="btn btn-outline-info btn-lg">About us</Link>
                </div>
                <div className="col-md-6">
                    <div className="row justify-content-end">
                        <div className="col-md-10">
                            <SmallSearchPanel />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Banner;