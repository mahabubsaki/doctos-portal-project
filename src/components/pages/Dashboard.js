import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../utilities/CustomLink';

const Dashboard = () => {
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
                    <li><CustomLink to="/dashboard">My Appointments</CustomLink></li>
                    <li><CustomLink to="/dashboard/my-reviews">My Reviews</CustomLink></li>
                    <li><CustomLink to="/dashboard/my-history">My History</CustomLink></li>
                    <li><CustomLink to="/dashboard/all-users">All Users</CustomLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;