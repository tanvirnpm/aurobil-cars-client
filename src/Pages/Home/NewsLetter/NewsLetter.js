import React from 'react';
import { useForm } from "react-hook-form";

const NewsLetter = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="container py-5">
            <div className="row justify-content-center align-items-center">
                <h1 className="text-center">Newsletter</h1>
                <div className="col-md-4 mt-4">
                    <form className="d-flex" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" placeholder="Enter your valid email address" {...register("newsletter")} />
                        
                        <input className="btn btn-outline-info" type="submit" value="Subscribe!" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;