import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Header/Navbar';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { useHistory, useParams } from 'react-router';
import './Purchase.css'

const Purchase = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { make, model, price, image, grade, mileage, fuelType, year, color } = product;
    const [isOrderSuccess, setIsOrderSuccess] = useState(false);
    const { chassis } = useParams();
    const history = useHistory()
    useEffect(() => {
        fetch(`https://intense-dawn-68409.herokuapp.com/get-product/${chassis}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]));
    }, [])
    // console.log(product)
    const onSubmit = data => {
        const newOrder = data;
        newOrder.car = product;
        newOrder.status = 'Pending';
        fetch('https://intense-dawn-68409.herokuapp.com/make-order', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(result => result.json())
            .then(data => {
                const success = data.acknowledged;
                setIsOrderSuccess(success);
            })
        // console.log(data)
    };
    const redirectToOrder = () => {
        history.replace('/my-orders')
    }
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
            <span id="success-btn" data-bs-toggle="modal" data-bs-target="#successModal"></span>
            {
                isOrderSuccess && document.getElementById('success-btn').click()
            }
            {/* success order modal */}
            <div onClick={redirectToOrder} className="success modal fade" id="successModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="card">
                        <div className="card-img iconSuccess"> <i className="bi bi-check-circle"></i> </div>
                        <div className="card-title">
                            <p>Success!</p>
                        </div>
                        <div className="card-text">
                            <p>Yay! It's a nice order! <br />It will arrive soon.</p>
                        </div> <button className="btn">Track delivery</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Purchase;