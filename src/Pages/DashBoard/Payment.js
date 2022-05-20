import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

// stripe promise
const stripePromise = loadStripe('pk_test_51L1AmbEFg4BVPfTT55g3N3L048Xzi8XVPjRqXaIFZwGgNVGQGoHtNc7vpvZ7Jt48oD5WCP312wpPA0iXpijEasX800gG3Zccgc');

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

    return (
        <div className="flex justify-around flex-col lg:flex-row-reverse gap-5 mt-12">
            <div className="card w-80 md:w-2/5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className="font-bold">Hello {appointment.patientName}!</p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
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
            <div className="card w-80 md:w-2/5 bg-base-100 shadow-xl">
                <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
