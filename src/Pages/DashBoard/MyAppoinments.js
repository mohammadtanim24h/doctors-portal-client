import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyAppoinments = () => {
    const [appointments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${email}`)
        .then(res => res.json())
        .then(data => {
            setAppoinments(data);
        })
    }, [email])

    console.log(appointments);

    return (
        <div>
            <h2 className='text-purple-500 text-2xl'>My Appointments</h2>
        </div>
    );
};

export default MyAppoinments;