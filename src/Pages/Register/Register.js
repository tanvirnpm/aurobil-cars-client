import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-md-4">
                    <div class="login-form bg-light mt-4 p-4 shadow">
                        <form onSubmit={handleSubmit(onSubmit)} class="row g-3">
                            <h4 className="text-center"><Link to="/" className="text-info text-decoration-none">Aurobil Car's</Link></h4>
                            <div class="col-12">
                                <label>Name</label>
                                <input type="text" {...register("name")} class="form-control" placeholder="Name"/>
                            </div>
                            <div class="col-12">
                                <label>Email</label>
                                <input type="email" {...register("email")} class="form-control" placeholder="Email"/>
                            </div>
                            <div class="col-12">
                                <label>Password</label>
                                <input type="password" {...register("password")} class="form-control" placeholder="Password"/>
                            </div>
                            <div class="col-12">
                                <label>Confirm Password</label>
                                <input type="password" {...register("confirmPassword")} class="form-control" placeholder="Confirm Password"/>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-info float-end">Register</button>
                            </div>
                        </form>
                        <hr class="mt-4"/>
                        <div class ="col-12">
                        <p class ="text-center mb-0">Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;