import React from "react";

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, img, specialty } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img
                            src={img}
                            alt="doctor"
                        />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <button class="btn btn-xs bg-red-500 outline-0 border-0 text-white hover:bg-red-500 px-4">
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default DoctorRow;
