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
            <h3 className='text-xl text-secondary text-center'>Available Appointments on {date && format(date, "PP")}</h3> {/* eikhane date er value thaklei date ta format korte disi. karon jodi ami date select korar por abar oitate click kori tokhon date ta unselect hoye giye date er value undefined hoye jay and format korte giye error aisha pore. tai condition diye disi je date er value thaklei date format korbe nahole korbe na.*/}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-16'>
                {
                    services.map(service => <BookService key={service._id} service={service}></BookService>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;