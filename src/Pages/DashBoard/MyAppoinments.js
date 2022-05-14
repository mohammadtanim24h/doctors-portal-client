import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const MyAppoinments = () => {
    const [appointments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                setAppoinments(data);
            });
    }, [email]);

    return (
        <div>
            <h2 className="text-purple-500 text-2xl">My Appointments</h2>
            <div class="overflow-x-auto mt-6">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((a) => (
                            <tr key={a._id}>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;
