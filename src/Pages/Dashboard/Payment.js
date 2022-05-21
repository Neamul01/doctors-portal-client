import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L1x3aK0JmsF527V0F9dw7yf3UaxzCJYiUTFPOyoYuzDhFTmYt1uIpdCsp9lZALnjYNB1zbCn7PiSRc2VQpbhjLT00oIWbVByj');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card w-50 max-w-lg bg-base-100 shadow-xl">
                    <div className="card-body">
                        <p className="text-success text-left font-bold">Hello, {appointment.patientName}</p>
                        <h2 className="card-title">Pay for :{appointment.treatment}</h2>
                        <p>Your appointment: <span className="text-orange-500">{appointment.date}</span> at <span className="text-orange-500">{appointment.slot}</span> </p>
                        <p className='text-left'>Please pay :${appointment.price} </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm appointment={appointment}/>
                        </Elements>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;