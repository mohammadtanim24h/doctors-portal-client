import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import DeleteConfirmModal from "./DeleteConfirmModal";
import DoctorRow from "./DoctorRow";

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);
    const {
        data: doctors,
        isLoading,
        refetch,
    } = useQuery("doctors", () =>
        fetch("https://pacific-taiga-84729.herokuapp.com/doctors", {
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
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                                index={index}
                                key={doctor._id}
                                doctor={doctor}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingDoctor && (
                <DeleteConfirmModal
                    setDeletingDoctor={setDeletingDoctor}
                    deletingDoctor={deletingDoctor}
                    refetch={refetch}
                ></DeleteConfirmModal>
            )}
        </div>
    );
};

export default ManageDoctors;
