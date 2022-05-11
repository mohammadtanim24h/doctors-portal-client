import { format } from 'date-fns';
import React from 'react';

const AvailableAppointments = ({date}) => {
    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appointments on {format(date, "PP")}</h3>
        </div>
    );
};

export default AvailableAppointments;