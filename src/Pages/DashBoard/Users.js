import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
    const { data: users, isLoading } = useQuery("users", () =>
        fetch("http://localhost:5000/users").then((res) => res.json())
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
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <UserRow key={user._id} index={index} user={user}></UserRow>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
