import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";

const MyAppoinments = () => {
    const navigate = useNavigate();
    const [appointments, setAppoinments] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    useEffect(() => {
        fetch(
            `https://pacific-taiga-84729.herokuapp.com/booking?email=${email}`,
            {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    toast.error("Unauthorized or Forbidden Access");
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
            <h2 className="text-slate-500 text-2xl">My Appointments</h2>
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
                            <th>Payment</th>
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
                                <td>
                                    {a.price && !a.paid && (
                                        <Link to={`payment/${a._id}`}>
                                            <button className="btn btn-sm bg-green-500 outline-0 border-0 hover:bg-green-600 text-white px-4">
                                                Pay
                                            </button>
                                        </Link>
                                    )}
                                    {a.price && a.paid && (
                                        <div>
                                            <p className="text-green-600">Paid</p>
                                            <p className="text-orange-600">Transacting Id: {a.transactionId}</p>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinments;
