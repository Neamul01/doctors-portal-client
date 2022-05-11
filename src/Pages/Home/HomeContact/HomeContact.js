import React from 'react';

const HomeContact = () => {
    return (
        <section className="hero min-h-screen bg-appointment bg-cover">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h2 className="text-xl text-primary capitalize">contact us</h2>
                    <p className="text-3xl capitalize mb-12 mt-3">stay connected with us</p>
                    <input type="text" placeholder="Email Address" className="input w-full max-w-full mb-6" />
                    <input type="text" placeholder="Subject" className="input w-full max-w-full mb-6" />
                    <textarea className="textarea w-full h-28" placeholder="Your Message..."></textarea>
                    <button className="btn btn-primary capitalize mt-4 text-white bg-gradient-to-r from-secondary to-primary">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;