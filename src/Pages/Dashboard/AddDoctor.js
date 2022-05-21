import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import LoadingSpinner from '../Shared/LoadingSpinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()));

    const iamgeStorageKey = '592b3549595874674f93cdc0a6df1773';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${iamgeStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty
                    }
                }
                console.log('imagebb result', result)
            })

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
                        <p className="label-text text-left">Specialty</p>
                        <select className="select input-bordered w-full" {...register("specialty",)}>
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

                    <div className="form-control w-1/2 mt-3">
                        <p className="label-text text-left">Image</p>
                        <input
                            type="file"
                            placeholder="Image..."
                            className="input mt-1 w-full "
                            {...register("image",
                                {

                                    required: {
                                        value: true,
                                        message: 'Image is Required...'
                                    },

                                },
                            )}
                        />
                        <label className="lable text-left">
                            {errors.name?.type === 'required' && <small className='text-left text-red-500'>{errors.name.message}</small>}
                        </label>
                    </div>

                    <button className="btn w-1/2 my-3">Add</button>

                </div>
            </form>
        </div>
    );
};

export default AddDoctor;