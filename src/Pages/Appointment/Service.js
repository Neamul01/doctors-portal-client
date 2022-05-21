import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots, price } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{name}</h2>
                <p className="text-sm">{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try Another Day..</span>
                }</p>
                <p className='text-sm'>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Available</p>
                <p><small>Price :${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length < 1}
                        onClick={() => setTreatment(service)}
                        className="btn btn-secondary text-white bg-gradient-to-r from-secondary to-primary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;