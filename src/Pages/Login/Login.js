import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Spinner from '../../FeedBack/Spinner';

const Login = () => {
    const {user, loginUser, isLoading} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        loginUser(data.email, data.password, location , history);
    };
    // redirect if already logged user
    let { from } = location.state || { from: { pathname: "/" } };
    user?.email && history.replace(from)
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="login-form bg-light mt-4 p-4 shadow">
                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                            <h4 className="text-center"><Link to="/" className="text-info text-decoration-none">Aurobil Car's</Link></h4>
                            <div className="col-12">
                                <label>Email</label>
                                <input type="email" {...register("email")} className="form-control" placeholder="Email"/>
                            </div>
                            <div className="col-12">
                                <label>Password</label>
                                <input type="password" {...register("password")} className="form-control" placeholder="Password"/>
                            </div>
                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                    <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-info float-end">Login</button>
                            </div>
                        </form>
                        {
                            isLoading && <Spinner />
                        }
                        <hr className="mt-4"/>
                        <div className="col-12">
                        <p className="text-center mb-0">Have not account yet? <Link to="/register">Signup</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;