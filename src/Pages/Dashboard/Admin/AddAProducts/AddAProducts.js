import React, { useState } from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const AddAProducts = () => {
    const { user } = useAuth();

    const carSpecifications = {
        make: ['Toyota', 'Nissan', 'Honda', 'Mazda'],
        model: ['Corolla Axio', 'Corolla Fielder', 'Aqua', 'Premio', 'Allion', 'X-Trail', 'Axela', 'LAND CRUISER PRADO'],
        package: ['G', 'X', 'G Plus', 'S Touring', 'A Touring', 'TX L PACKAGE', 'Emergency Brake Package'],
        color: ['Red Wine', 'Silver', 'Orange', 'Wine', 'Black', 'White', 'Pearl', 'Blue', 'Mica Blue'],
        year: [2016,2017,2018,2019,2020,2021,2020],
        fuelType: ['Hybrid', 'Non Hybrid'],
        grade: [5,4.5,4,3.5,3,'R','RA']
    }
    
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const newCar = data;
        newCar.addedBy = {
            email: user.email,
            name: user.name
        };
        fetch('http://localhost:5000/add-product',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCar)
        })
        .then(result => result.json())
        .then(data=>console.log('after added product', data))
    };
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h1 className="ms-md-5">Add a car</h1>
                    <div className="row mt-4 border mx-md-5 mx-2 py-3 rounded shadow-sm">
                        <div className="col">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-3">
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("make")}>
                                            <option >Select Make</option>
                                            {
                                                carSpecifications.make.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("model")}>
                                            <option >Select Model</option>
                                            {
                                                carSpecifications.model.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("package")}>
                                            <option >Select Package</option>
                                            {
                                                carSpecifications.package.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("year")}>
                                            <option >Select Year</option>
                                            {
                                                carSpecifications.year.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("color")}>
                                            <option >Select Color</option>
                                            {
                                                carSpecifications.color.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("fuelType")}>
                                            <option >Select Fuel</option>
                                            {
                                                carSpecifications.fuelType.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("grade")}>
                                            <option >Select Grade</option>
                                            {
                                                carSpecifications.grade.map((item, index)=><option key={index} defaultValue={item}>{item}</option>)
                                            }
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <input className="form-control" placeholder="Mileage (ex. 10000)" {...register("mileage")}/>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <input className="form-control" placeholder="Price (ex. 2550000)" {...register("price")}/>
                                    </div>
                                    <div className="col-lg-6 col-md-8 col-sm-12">
                                        <input className="form-control" placeholder="Chassis Number (ex. NRE161-0546875)" {...register("chassis")}/>
                                    </div>
                                    <div className="col-lg-6 col-md-8 col-sm-12">
                                        <input className="form-control" placeholder="Car Picture (ex. https://car.jpg)" {...register("image")}/>
                                    </div>
                                </div>

                                <div className="text-end mt-3">
                                    <button type="submit" className="btn btn-lg btn-outline-info">Add A Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAProducts;