import React from 'react';

const Service = ({ service }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p className="text-sm">{
                    slots.length
                        ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-500'>Try Another Day..</span>
                }</p>
                <p className='text-sm'>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Available</p>
                <div class="card-actions justify-center">
                    <button class="btn btn-secondary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;