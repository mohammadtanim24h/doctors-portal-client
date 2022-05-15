import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                toast.success(`Succefully made ${email} an admin`);
                refetch();
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>
                {role ? (
                    <span className="text-slate-600 font-bold">
                        Already an admin
                    </span>
                ) : (
                    <button
                        onClick={makeAdmin}
                        className="btn btn-xs text-white"
                    >
                        Make Admin
                    </button>
                )}
            </td>
            <td>
                <button className="btn btn-xs bg-red-600 hover:bg-red-600 outline-0 border-0 text-white">
                    Remove User
                </button>
            </td>
        </tr>
    );
};

export default UserRow;
