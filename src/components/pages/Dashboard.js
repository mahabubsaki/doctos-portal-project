import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';
import CustomLink from '../utilities/CustomLink';
import Loading from '../utilities/Loading';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user)
    if (loading) {
        return <Loading></Loading>
    }
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
                    {admin &&
                        <>
                            <li><CustomLink to="/dashboard/all-users">All Users</CustomLink></li>
                            <li><CustomLink to="/dashboard/add-doctor">Add Doctor</CustomLink></li>
                            <li><CustomLink to="/dashboard/manage-doctor">Manage Doctor</CustomLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;