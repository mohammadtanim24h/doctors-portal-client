import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const ManageDoctors = () => {
    const { data: doctors, isLoading } = useQuery("doctors", () =>
        fetch("http://localhost:5000/doctors", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );
    console.log(doctors);
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl text-slate-700">
                Manage Doctors {doctors.length}
            </h2>
        </div>
    );
};

export default ManageDoctors;
