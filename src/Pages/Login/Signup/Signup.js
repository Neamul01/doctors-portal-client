import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin';

const Signup = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title justify-center">Signup</h2>
                    <div className='mt-5'>
                        <div className="form-control w-full">
                            <lable className="label-text text-left">Name</lable>
                            <input type="text" placeholder="Your Name..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full mt-3">
                            <lable className="label-text text-left">Email</lable>
                            <input type="email" placeholder="Email..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <lable className="label-text text-left">Password</lable>
                            <input type="password" placeholder="Password..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <label className="label mb-2">
                            <span className="label-text-alt">Forgot Password?</span>
                        </label>
                        <button className="btn w-full mb-2">Login</button>
                        <span className="label-text-alt text-sm">Already have an Account? <Link className='text-secondary' to={'/login'}>Login</Link></span>

                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Signup;