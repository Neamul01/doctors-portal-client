import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, address, describsion, image } = testimonial;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-left mt-6'>{describsion}</p>
                <div className='flex items-center mt-6'>
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={image} alt='person' />
                        </div>
                    </div>
                    <div className='ml-6 text-left'>
                        <h2 className="card-title capitalize">{name}</h2>
                        <p className="text-xl capitalize">{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;