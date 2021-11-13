import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import PasswordNotMatched from '../../FeedBack/PasswordNotMatched';
import IsRegSucess from '../../FeedBack/IsRegSucess';


const Register = () => {
    const { registerUser, isLoading, isRegSuccess } = useAuth();
    const [passwordNotMatched, setPasswordNotMatched] = useState(false)
    const history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            setPasswordNotMatched(false)
            registerUser(data.email, data.password, data.name, history)
        } else {
            setPasswordNotMatched(true)
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-4">
                    <div className="login-form bg-light mt-4 p-4 shadow">
                        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
                            <h4 className="text-center"><Link to="/" className="text-info text-decoration-none">Aurobil Car's</Link></h4>
                            <div className="col-12">
                                <label>Name</label>
                                <input type="text" {...register("name")} className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-12">
                                <label>Email</label>
                                <input type="email" {...register("email")} className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-12">
                                <label>Password</label>
                                <input type="password" {...register("password")} className="form-control" placeholder="Password" />
                            </div>
                            <div className="col-12">
                                <label>Confirm Password</label>
                                <input type="password" {...register("confirmPassword")} className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-info float-end">Register</button>
                            </div>
                        </form>
                        {isLoading && <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {passwordNotMatched && <PasswordNotMatched setPasswordNotMatched={setPasswordNotMatched}/>}
                        {isRegSuccess && <IsRegSucess />}

                        <hr className="mt-4" />
                        <div className="col-12">
                            <p className="text-center mb-0">Already have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;