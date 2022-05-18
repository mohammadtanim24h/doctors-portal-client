import React from "react";

const DoctorRow = ({ doctor, index, setDeletingDoctor }) => {
    const { name, img, specialty } = doctor;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-16 rounded">
                        <img src={img} alt="doctor" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label
                    onClick={() => setDeletingDoctor(doctor)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs bg-red-500 outline-0 border-0 text-white hover:bg-red-500 px-4"
                >
                    Delete
                </label>
            </td>
        </tr>
    );
};

export default DoctorRow;
