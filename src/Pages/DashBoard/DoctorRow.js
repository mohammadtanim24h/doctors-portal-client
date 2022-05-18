import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty, email } = doctor;

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount === 1) {
                    toast.success(`Doctor ${name} was deleted successfully`);
                    refetch();
                }
                console.log(data);
            });
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="doctor" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button
                    onClick={() => handleDelete(email)}
                    class="btn btn-xs bg-red-500 outline-0 border-0 text-white hover:bg-red-500 px-4"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default DoctorRow;
