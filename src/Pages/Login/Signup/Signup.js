import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import LoadingSpinner from '../../Shared/LoadingSpinner';
import SocialLogin from '../SocialLogin';

const Signup = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, varifyError] = useSendEmailVerification(auth);
    const [token] = useToken(user);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = async (data) => {
        const email = data.email;
        const pass = data.password;
        await createUserWithEmailAndPassword(email, pass);
        await updateProfile({ displayName: data.name })
        await sendEmailVerification();
        alert('Please check your inbox and varify email...')
    }

    let signinError;

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || updating || sending) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (error || updateError || varifyError) {
        signinError = <p className='text-red-500 text-left'><small>{error?.message}</small></p>
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h2 className="card-title justify-center">Signup</h2>
                    <div className='mt-5'>
                        <div className="form-control w-full">
                            <p className="label-text text-left">Name</p>
                            <input
                                type="text"
                                placeholder="Your Name..."
                                className="input input-bordered w-full max-w-xs"
                                {...register("name",
                                    {

                                        required: {
                                            value: true,
                                            message: 'Name is Required...'
                                        },

                                    },
                                )}
                            />
                            <label className="lable text-left">
                                {errors.name?.type === 'required' && <small className='text-left text-red-500'>{errors.name.message}</small>}
                            </label>
                        </div>
                        <div className="form-control w-full mt-3">
                            <p className="label-text text-left">Email</p>
                            <input
                                type="email"
                                placeholder="Email..."
                                className="input input-bordered w-full max-w-xs"
                                {...register("email",
                                    {

                                        required: {
                                            value: true,
                                            message: 'Email is Required...'
                                        },

                                    },
                                )}
                            />
                            <label className="lable text-left">
                                {errors.email?.type === 'required' && <small className='text-left text-red-500'>{errors.email.message}</small>}
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
                                {errors.password?.type === 'required' && <small className='text-left text-red-500'>{errors.password.message}</small>}
                                {errors.password?.type === 'minLength' && <small className='text-left text-red-500'>{errors.password.message}</small>}
                            </label>
                        </div>
                        {signinError}
                        <button className="btn w-full my-3">Signup</button>
                        <small className="text-left label-text-alt text-sm">Already have an Account? <Link className='text-secondary' to={'/login'}>Login</Link></small>

                    </div>
                    <div className="divider">OR</div>
                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Signup;