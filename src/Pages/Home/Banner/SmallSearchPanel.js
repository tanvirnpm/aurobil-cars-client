import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const SmallSearchPanel = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="bg-white border rounded py-3 px-4 shadow-sm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <select className="form-control mb-2" {...register("make")}>
                    <option defaultValue="Make">Make</option>
                    <option defaultValue="Honda">Honda</option>
                    <option defaultValue="Mazda">Mazda</option>
                    <option defaultValue="Nissan">Nissan</option>
                </select>
                <select className="form-control mb-2" {...register("model")}>
                    <option defaultValue="Model">Model</option>
                    <option defaultValue="Allion">Allion</option>
                    <option defaultValue="Premio">Premio</option>
                    <option defaultValue="Aqua">Aqua</option>
                </select>
                <select className="form-control mb-2" {...register("fuelType")}>
                    <option defaultValue="Fuel Type">Fuel Type</option>
                    <option defaultValue="Hybrid">Hybrid</option>
                    <option defaultValue="Non Hybrid">Non Hybrid</option>
                </select>
                <select className="form-control mb-2" {...register("color")}>
                    <option defaultValue="Color">Color</option>
                    <option defaultValue="Wine">Wine</option>
                    <option defaultValue="Blue">Blue</option>
                    <option defaultValue="Black">Black</option>
                </select>
                <div className="row">
                    <div className="col-md-6">
                        <input type="text" className="form-control mb-2" placeholder="Min Price" {...register("minPrice")} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control mb-2" placeholder="Max Price" {...register("maxPrice")} />
                    </div>
                </div>


                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/search" className="text-info">Advance Search</Link>
                    <input className="btn btn-outline-info" defaultValue="Search" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SmallSearchPanel;