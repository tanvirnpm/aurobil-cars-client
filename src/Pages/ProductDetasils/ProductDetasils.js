import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import SimilarCarsCard from './SimilarCarsCard';

const ProductDetasils = () => {
    const [product, setProduct]= useState([]);
    const {make, model, price, image, grade, mileage, fuelType, year, color} = product;
    const { chassis } = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/get-product/${chassis}`)
        .then(res=> res.json())
        .then(data=> setProduct(data[0]));
    },[])
    // console.log(product.package)
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <h1 className="text-center border bg-info rounded-pill mb-4">{make} {model}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{height: '400px'}} className="img-fluid" src={image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>Price: {price} /-</h4>
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
                                    <li>{make}</li>
                                    <li>{model}</li>
                                    <li>{product.package}</li>
                                    <li>{fuelType}</li>
                                    <li>{grade}</li>
                                    <li>{year}</li>
                                    <li>{mileage} km</li>
                                    <li>{color}</li>
                                    <li>{chassis}</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="text-end">
                        <Link to={`/purchase/${chassis}`} className="btn btn-outline-info">
                            Purchase Now
                        </Link>
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