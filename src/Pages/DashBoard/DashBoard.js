import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h2 className="text-3xl text-purple-500 font-bold">Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li>
                        <Link to="/dashboard">My Appointments</Link>
                    </li>
                    <li>
                        <Link to="myReview">My Reviews</Link>
                    </li>
                    <li>
                        <Link to="myHistory">My History</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;
