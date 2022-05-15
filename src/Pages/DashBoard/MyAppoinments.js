import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";

const MyAppoinments = () => {
    const navigate = useNavigate();
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
            .then((res) => {
                if(res.status === 401 || res.status === 403) {
                    toast.error('Unauthorized or Forbidden Access');
                    signOut(auth);
                    localStorage.removeItem("accessToken");
                    navigate("/");
                }

                return res.json();
            })
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
