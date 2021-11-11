import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
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
                                <label>Email</label>
                                <input type="email" {...register("email")} class="form-control" placeholder="Email"/>
                            </div>
                            <div class="col-12">
                                <label>Password</label>
                                <input type="password" {...register("password")} class="form-control" placeholder="Password"/>
                            </div>
                            <div class="col-12">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="rememberMe"/>
                                    <label class ="form-check-label" for="rememberMe"> Remember me</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-info float-end">Login</button>
                            </div>
                        </form>
                        <hr class="mt-4"/>
                        <div class ="col-12">
                        <p class ="text-center mb-0">Have not account yet? <Link to="/register">Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;