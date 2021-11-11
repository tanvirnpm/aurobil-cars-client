import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import SimilarCarsCard from './SimilarCarsCard';

const ProductDetasils = () => {
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center border bg-info rounded-pill mb-4">Toyota C-HR</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src="https://global.toyota/pages/models/images/20191018/kv/c-hr_ogp_01.jpg" alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>Price: 34,00,000 /-</h4>
                        <hr />
                        <div className="row">
                            <div className="col">
                                <ul className="list-unstyled mb-0">
                                    <li>Make:</li>
                                    <li>Model:</li>
                                    <li>Package:</li>
                                    <li>Fuel Type:</li>
                                    <li>Auction Grade:</li>
                                    <li>Year:</li>
                                    <li>Mileage:</li>
                                    <li>Color:</li>
                                    <li>Chassis No.:</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="list-unstyled mb-0">
                                    <li>Toyota</li>
                                    <li>Esquire</li>
                                    <li>GI Premium Package</li>
                                    <li>Hybrid</li>
                                    <li>4</li>
                                    <li>2018</li>
                                    <li>10,825 km</li>
                                    <li>Purple</li>
                                    <li>ZWR80-0349917</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="text-end">
                            <button className="btn btn-outline-info btn-lg">Purchase Now</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h3 className="mb-4">Similar Car's. You may choose it.</h3>
                    <div className="row g-3">
                        <SimilarCarsCard />
                        <SimilarCarsCard />
                        <SimilarCarsCard />
                        <SimilarCarsCard />
                        <SimilarCarsCard />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetasils;