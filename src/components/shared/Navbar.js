import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from '../utilities/CustomLink';
import Loading from '../utilities/Loading';
import LogoutAlert from '../utilities/LogoutAlert';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const handleSignOut = () => {
        localStorage.removeItem('access_token')
        signOut(auth)
    }
    // const handleTheme = () => {
    //     const current = document.getElementsByTagName('html')[0].getAttribute('data-theme')
    //     if (current === "light") {
    //         document.getElementsByTagName('html')[0].setAttribute('data-theme', 'dark')
    //     }
    //     else {
    //         document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light')
    //     }
    // }
    const AlertData = {
        title: "Confirm Logout",
        icon: "warning",
        text: "Are you sure you want to Log Out?",
        btnType: "btn btn-primary",
    };
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 md:hidden">
                        {/* <li className="flex items-center px-4">
                            <label className="switch">
                                <input type="checkbox" onChange={handleTheme} />
                                <span className="slider round"></span>
                            </label>
                        </li> */}
                        <li><CustomLink to="/">Home</CustomLink></li>
                        <li><CustomLink to="/about">About</CustomLink></li>
                        <li><CustomLink to="/appointment">Appointment</CustomLink></li>
                        <li><CustomLink to="/reviews">Reviews</CustomLink></li>
                        <li><CustomLink to="/contact">Contact Us</CustomLink></li>
                        {
                            !user ?
                                <>
                                    <li><CustomLink to="/login">Login</CustomLink></li>
                                    <li><CustomLink to="/register">Sign Up</CustomLink></li>
                                </>
                                :
                                <>
                                    <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                                    <LogoutAlert props={AlertData}></LogoutAlert>
                                </>
                        }
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal p-0">
                    {/* <li className="flex items-center px-4">
                        <label className="switch">
                            <input type="checkbox" onChange={handleTheme} />
                            <span className="slider round"></span>
                        </label>
                    </li> */}
                    <li><CustomLink to="/">Home</CustomLink></li>
                    <li><CustomLink to="/about">About</CustomLink></li>
                    <li><CustomLink to="/appointment">Appointment</CustomLink></li>
                    <li><CustomLink to="/reviews">Reviews</CustomLink></li>
                    <li><CustomLink to="/contact">Contact Us</CustomLink></li>
                    {
                        !user ?
                            <>
                                <li><CustomLink to="/login">Login</CustomLink></li>
                                <li><CustomLink to="/register">Sign Up</CustomLink></li>
                            </>
                            :
                            <>
                                <li><CustomLink to="/dashboard">Dashboard</CustomLink></li>
                                <LogoutAlert props={AlertData}></LogoutAlert>
                            </>
                    }
                </ul>
            </div>
            <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden ml-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
        </div>
    );
};

export default Navbar;