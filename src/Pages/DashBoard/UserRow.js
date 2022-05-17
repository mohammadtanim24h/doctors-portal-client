import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://pacific-taiga-84729.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => {
                if(res.status === 403){
                    toast.error("You don't have required permission to make an admin");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast.success(`Succefully made ${email} an admin`);
                    refetch();
                }
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
