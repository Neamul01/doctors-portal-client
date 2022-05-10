import React from 'react';

const ServiceCard = ({ img, title, text }) => {
    return (
        <div className="card flex-col items-center justify-center card-side bg-base-100 mx-6 shadow-xl">
            <figure className=' max:w-[155px]'><img className='w-100' src={img} alt="Album" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center">{title}</h2>
                <p className='mx-4'>{text}</p>
            </div>
        </div>
    );
};

export default ServiceCard;