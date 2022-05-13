import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="min-h-[500px] flex justify-center items-center">
            <div className="w-[385px] mx-auto testimonial-card p-7">
                <h1 className="text-xl mb-9 text-center">Login</h1>
                <form>
                    <div className="w-full mb-3">
                        <label htmlFor="name">Name</label><br />
                        <input type="text" name="name" id="name" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1" required />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1" required />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1" required />
                    </div>
                    <button className="text-sm text-white btn w-full bg-projectNeutral" type="submit">Sign Up</button>
                </form>
                <button className="mb-3">Forget Password?</button>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid card rounded-box place-items-center">
                        <span className="text-xs">Already member? <Link to="/login" className="text-projectPrimary">Log In</Link></span>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <button className="btn btn-outline w-full border border-[#3A4256] bg-white box-border text-projectAccent rounded-lg">CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;