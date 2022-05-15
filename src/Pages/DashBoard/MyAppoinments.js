import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";

const MyAppoinments = () => {
    const [appointments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                setAppoinments(data);
            });
    }, [email]);

    return (
        <div>
            <h2 className="text-purple-500 text-2xl">My Appointments</h2>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((a, index) => (
                            <tr key={a._id}>
                                <th>{index + 1}</th>
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
