import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;
    const { data: appointment, isLoading } = useQuery(["booking", id], () =>
        fetch(url, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    console.log(appointment);

    return (
        <div className="flex justify-around flex-col lg:flex-row-reverse gap-5">
            <div class="card w-80 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="font-bold">Hello {appointment.patientName}!</p>
                    <h2 class="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>
                        Your Appointment: {" "}
                        <span className="text-orange-600">
                            {appointment.date}
                        </span>{" "}
                        at{" "}
                        <span className="text-orange-600">
                            {appointment.slot}
                        </span>
                    </p>
                    <p>Please pay <span className="text-orange-600">${appointment.price}</span></p>
                </div>
            </div>
            <div class="card w-80 md:w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
