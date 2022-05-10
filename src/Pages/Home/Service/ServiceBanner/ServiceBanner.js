import React from 'react';
import treatment from '../../../../assets/images/treatment.png'

const ServiceBanner = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content gap-12 text-left flex-col lg:flex-row">
                <img src={treatment} class="sm:max-w-[322px] md:max-w-md rounded-lg shadow-2xl" alt='treatment' />
                <div className='ml-12'>
                    <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;