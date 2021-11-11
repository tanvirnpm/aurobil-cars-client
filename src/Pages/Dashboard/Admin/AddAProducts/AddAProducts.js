import React from 'react';
import DashboardMenu from '../../Dashboard/DashboardMenu';
import { useForm } from "react-hook-form";

const AddAProducts = () => {
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h1>Add a car</h1>
                    <div className="row mt-4">
                        <div className="col">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row g-3">
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("make")}>
                                            <option selected>Select Make</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("model")}>
                                            <option selected>Select Model</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("package")}>
                                            <option selected>Select Package</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("year")}>
                                            <option selected>Select Year</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <select className="form-select" {...register("color")}>
                                            <option selected>Select Color</option>
                                            <option value="female">female</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                        <input className="form-control" placeholder="Mileage (ex. 10000)" {...register("mileage")}/>
                                    </div>
                                    <div className="col-lg-6 col-md-8 col-sm-12">
                                        <input className="form-control" placeholder="Chassis Number (ex. NRE161-0546875)" {...register("mileage")}/>
                                    </div>
                                </div>
                                {/* 
                                    
                                    Make:
                                    Model:
                                    Package:
                                    Fuel Type:
                                    Auction Grade:
                                    Year:
                                    Mileage:
                                    Color:
                                    Chassis No.:
                                    Toyota
                                    Honda
                                    Nissan
                                    Mazda
                                    Mitsubishi
                                    Subaru
                                    Suzuki
                                    Kia

                                */}

                                <div className="text-end mt-3">
                                    <input type="submit" value="Add A Product" className="btn btn-lg btn-outline-info" />
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