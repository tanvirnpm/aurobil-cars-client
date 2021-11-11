import React, { useState } from 'react';
import DashboardMenu from '../Dashboard/DashboardMenu';
import { useForm } from "react-hook-form";


const Review = () => {
    const [review, setReview] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => setReview(data);
    console.log(review)
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <DashboardMenu />
                <div className="col py-3">
                    <h3>Add a Review</h3>
                    <div className="row mt-4">
                        <div className="col-md-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className="form-control mb-2" type="text" placeholder="Your Name" {...register("name")} />
                                <input className="form-control mb-2" type="text" placeholder="Your Email" {...register("email")} />
                                <textarea className="form-control mb-2" cols="30" rows="10" placeholder="What kind of services and benefits have you received from us?" {...register("review")}></textarea>
                                {errors.exampleRequired && <span>This field is required</span>}

                                <div className="text-end">
                                    <input type="submit" value="Send" className="btn btn-lg btn-outline-info" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;