import React from 'react';

const ServiceCard = () => {
    return (
        <div className="card flex-col card-side bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/album?w=400&h=400" alt="Album" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title justify-center    ">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default ServiceCard;