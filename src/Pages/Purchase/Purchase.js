import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router';

const Purchase = () => {
    const {user} = useAuth();
    const [product, setProduct]= useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {make, model, price, image, grade, mileage, fuelType, year, color} = product;
    const { chassis } = useParams();
    useEffect(()=>{
        fetch(`https://intense-dawn-68409.herokuapp.com/get-product/${chassis}`)
        .then(res=> res.json())
        .then(data=> setProduct(data[0]));
    },[])
    // console.log(product)
    const onSubmit = data => {
        const newOrder = data;
        newOrder.car = product;
        newOrder.status = 'Pending';
        fetch('https://intense-dawn-68409.herokuapp.com/make-order',{
            method: "POST",
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(result=> result.json())
        .then(data => console.log(data))
        // console.log(data)
    };
    return (
        <div>
            <Navbar />
            <div className="container my-5">
            <h1 className="text-center border bg-info rounded-pill mb-4">{make} {model}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{ height: '400px' }} className="img-fluid" src={image} alt="" />
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-2" value={user.name} type="text" placeholder="Your Name" {...register("name")} />
                            <input className="form-control mb-2" value={user.email} type="text" placeholder="Your Email" {...register("email")} />
                            <input className="form-control mb-2" type="text" placeholder="Your Contact Number" {...register("contact")} />
                            <textarea className="form-control mb-2" cols="30" rows="10" placeholder="Your Full Address" {...register("address")}></textarea>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <div className="text-end">
                                <input type="submit" value="Place on Order" className="btn btn-lg btn-outline-info" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;