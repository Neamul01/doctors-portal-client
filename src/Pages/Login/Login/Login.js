import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import SocialLogin from '../SocialLogin';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = data => {
        const email = data.email;
        const pass = data.password;
        signInWithEmailAndPassword(email, pass);
    };
    let signinError;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error) {
        signinError = <p className='text-red-500 text-left'><small>{error?.message}</small></p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="card-title justify-center">Login</h2>
                    <div className='mt-5'>
                        <div className="form-control w-full">
                            <p className="label-text text-left">Email</p>
                            <input
                                type="email"
                                placeholder="Email..."
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Email is Required..'
                                        }
                                    }
                                )}
                            />
                            <label className="lable text-left">
                                {errors.email?.type === 'required' && <small className='text-red-500'>{errors.email.message}</small>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs mt-3">
                            <p className="label-text text-left">Password</p>
                            <input
                                type="password"
                                placeholder="Password..."
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {

                                        required: {
                                            value: true,
                                            message: 'Password is Required...'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Length must be 6 or more..'
                                        }

                                    },

                                )}
                            />
                            <label className="lable text-left">
                                {errors.password?.type === 'required' && <small className='text-red-500'>{errors.password.message}</small>}
                                {errors.password?.type === 'minLength' && <small className='text-red-500'>{errors.password.message}</small>}
                            </label>
                        </div>
                        <p className="label mb-2">
                            <span className="label-text-alt">Forgot Password?</span>
                        </p>
                        {signinError}
                        <input type='submit' value='Login' className="btn w-full mb-2" />
                        <span className="label-text-alt text-sm">New to Doctors Portal? <Link className='text-secondary' to={'/signup'}>Create New Account</Link></span>

                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Login;