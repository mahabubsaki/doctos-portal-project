import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ResetPasswordModal from '../child/ResetPasswordModal';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../utilities/Loading';
import { useForm } from "react-hook-form";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Register = () => {

    const formSchema = Yup.object().shape({
        confirm: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords does not match')
            .required('Please confirm your password'),
        password: Yup.string()
            .required("Password is required")
            .matches(
                /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 8 characters, one uppercase, one number and one special case character"
            ),
        email: Yup.string()
            .required("Email is required")
            .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                "Please provide a valid email address"),
        fullName: Yup.string()
            .required('Full Name is required')
            .min(5, "Full Name is too short")
            .max(20, "Full Name is too long")
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, watch, formState: { errors } } = useForm(formOptions);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [resetModal, setResetModal] = useState(false)
    const onSubmit = (data) => {
        console.log(data);
    }
    if (user) {
        console.log(user);
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="min-h-[500px] flex justify-center items-center">
            <div className="w-[385px] mx-auto testimonial-card p-7">
                <h1 className="text-xl mb-9 text-center">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-3">
                        <label htmlFor="name">Full Name</label><br />
                        <input type="text" name="name" id="name" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            {...register("fullName")}
                        />
                        <label className="label">
                            {<span className="label-text-alt text-red-500">{errors.fullName?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            {...register("email")}
                        />
                        <label className="label">
                            {<span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            ref={register}
                            {...register("password")} />
                        <label className="label">
                            {<span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="confirm">Confirm Password</label><br />
                        <input type="password" name="confirm" id="confirm" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            {...register("confirm")}
                        />
                        <label className="label">
                            {<span className="label-text-alt text-red-500">{errors.confirm?.message}</span>}
                        </label>
                    </div>
                    <button className="text-sm text-white btn w-full bg-projectNeutral" type="submit">Sign Up</button>
                </form>
                <label htmlFor="reset-modal" className="modal-button cursor-pointer" onClick={() => setResetModal(true)}>Forget Password?</label>
                {resetModal && <ResetPasswordModal
                    setResetModal={setResetModal}
                ></ResetPasswordModal>}
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="grid card rounded-box place-items-center">
                        <span className="text-xs">Already member? <Link to="/login" className="text-projectPrimary">Log In</Link></span>
                    </div>
                    <div className="divider">OR</div>
                    <div>
                        <button className="btn btn-outline w-full border border-[#3A4256] bg-white box-border text-projectAccent rounded-lg" onClick={() => signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;