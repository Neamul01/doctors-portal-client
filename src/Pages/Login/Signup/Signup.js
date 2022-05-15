import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin';

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit } = useForm();

    const onSubmit = async () => {
        // await createUserWithEmailAndPassword(email,pass);
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="card-title justify-center">Signup</h2>
                    <div className='mt-5'>
                        <div className="form-control w-full">
                            <p className="label-text text-left">Name</p>
                            <input type="text" placeholder="Your Name..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full mt-3">
                            <p className="label-text text-left">Email</p>
                            <input type="email" placeholder="Email..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <p className="label-text text-left">Password</p>
                            <input type="password" placeholder="Password..." className="input input-bordered w-full max-w-xs" />
                        </div>
                        <p className="label mb-2">
                            <span className="label-text-alt">Forgot Password?</span>
                        </p>
                        <button className="btn w-full mb-2">Login</button>
                        <span className="label-text-alt text-sm">Already have an Account? <Link className='text-secondary' to={'/login'}>Login</Link></span>

                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Signup;