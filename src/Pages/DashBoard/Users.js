import { signOut } from "firebase/auth";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase/firebase.init";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery("users", () =>
        fetch("https://pacific-taiga-84729.herokuapp.com/users", {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then((res) => {
            if(res.status === 401 || res.status === 403) {
                toast.error("Forbidden access. Please login again")
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/");
            }
            return res.json();
        })
    );

    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <div>
            <h2 className="text-2xl text-slate-500">
                All Users {users?.length}
            </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => (
                            <UserRow key={user._id} index={index} user={user} refetch={refetch}></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
