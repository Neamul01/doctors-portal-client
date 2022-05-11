import React from 'react';
import chair from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div
            className="hero bg-hero-pattern bg-cover w-full min-h-screen pt-0"
        >
            <div className="hero-content p-0 flex-col gap-16 lg:flex-row-reverse mb-6 ">
                <img alt='chair' className='max-w-full max-h-screen md:max-w-[594px] md:max-h-[355px]' src={chair} />
                <div className='text-left'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div >
    );
};

export default Banner;