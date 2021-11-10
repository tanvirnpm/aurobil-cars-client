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
                    <option selected>Make</option>
                    <option value="Honda">Honda</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Nissan">Nissan</option>
                </select>
                <select className="form-control mb-2" {...register("model")}>
                    <option selected>Model</option>
                    <option value="Allion">Allion</option>
                    <option value="Premio">Premio</option>
                    <option value="Aqua">Aqua</option>
                </select>
                <select className="form-control mb-2" {...register("fuelType")}>
                    <option selected>Fuel Type</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Non Hybrid">Non Hybrid</option>
                </select>
                <select className="form-control mb-2" {...register("color")}>
                    <option selected>Color</option>
                    <option value="Wine">Wine</option>
                    <option value="Blue">Blue</option>
                    <option value="Black">Black</option>
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
                    <input className="btn btn-outline-info" value="Search" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default SmallSearchPanel;