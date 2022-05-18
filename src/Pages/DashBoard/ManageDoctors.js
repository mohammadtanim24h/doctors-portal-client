import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery("doctors", () =>
        fetch("http://localhost:5000/doctors", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <h2 className="text-2xl text-slate-700">
                Manage Doctors {doctors.length}
            </h2>
            {/* Table */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((doctor, index) => (
                            <DoctorRow
                                refetch={refetch}
                                index={index}
                                key={doctor._id}
                                doctor={doctor}
                            ></DoctorRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;
