import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const onSubmit = async (data) => {
        console.log(data)
    }

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body items-center">
                <div className='mt-5 w-full flex flex-col items-center'>
                    <div className="form-control w-1/2">
                        <p className="label-text text-left">Name</p>
                        <input
                            type="text"
                            placeholder="Your Name..."
                            className="input input-bordered w-full "
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
                    <div className="form-control w-1/2 mt-3">
                        <p className="label-text text-left">Email</p>
                        <input
                            type="email"
                            placeholder="Email..."
                            className="input input-bordered w-full "
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
                    <div className="form-control w-1/2  mt-3">
                        <p className="label-text text-left">Speciality</p>
                        <select className="select input-bordered w-full" {...register("speciality",)}>
                            {
                                services.map(service => <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                            }
                        </select>
                        <label className="lable text-left">
                            {errors.password?.type === 'required' && <small className='text-left text-red-500'>{errors.password.message}</small>}
                        </label>
                    </div>

                    <button className="btn w-1/2 my-3">Add</button>

                </div>
            </form>
        </div>
    );
};

export default AddDoctor;