import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'

const AppointmentHero = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div
            className="hero bg-hero-pattern bg-cover w-full min-h-screen pt-0"
        >
            <div className="hero-content p-0 flex-col gap-16 lg:flex-row-reverse mb-6 ">
                <img alt='chair' className='max-w-full max-h-screen md:max-w-[594px] md:max-h-[355px]' src={chair} />
                <div className='text-left'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p className='md:ml-6'>You picked: {format(date, 'PP')}.</p>
                </div>
            </div>
        </div >
    );
};

export default AppointmentHero;