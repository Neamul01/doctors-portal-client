import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppointment = ({ date }) => {
    const [services, setServices]= useState([]);

    
    return (
        <div>
            <h4 className='md:ml-6'>You picked: {format(date, 'PP')}.</h4>
        </div>
    );
};

export default AvailableAppointment;