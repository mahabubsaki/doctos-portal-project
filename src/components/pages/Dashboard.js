import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const [myBookings, setMyBookings] = useState([])
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className="text-projectPrimary text-3xl text-center">Welcome to your Dashboard</h1>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/my-reviews">Reviews</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;