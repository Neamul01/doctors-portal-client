import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className='md:mb-32 mb-24 md:mt-24 mt-14'>
            <h4 className='text-xl text-center text-secondary mb-12'>Available Appointment on {format(date, 'PP')}.</h4>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-14 mt-24'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {
                    treatment && <BookingModal
                        treatment={treatment}
                    ></BookingModal>
                }
            </div>
        </section>
    );
};

export default AvailableAppointment;