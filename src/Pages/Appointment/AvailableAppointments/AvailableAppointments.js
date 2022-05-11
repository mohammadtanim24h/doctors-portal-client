import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookService from './BookService/BookService';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h3 className='text-xl text-secondary text-center'>Available Appointments on {format(date, "PP")}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                {
                    services.map(service => <BookService key={service._id} service={service}></BookService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;