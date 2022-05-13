import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ResetPasswordModal from '../child/ResetPasswordModal';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../utilities/Loading';
import { useForm } from "react-hook-form";

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
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
                            {...register("fullName", {
                                required: {
                                    value: true,
                                    message: "Please enter your full name"
                                },
                                maxLength: {
                                    value: 20,
                                    message: "Name is too long"
                                }
                            })}
                        />
                        <label className="label">
                            {errors.fullName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fullName?.message}</span>}
                            {errors.fullName?.type === 'maxLength' && <span className="label-text-alt text-red-500">{errors.fullName?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Please enter your email"
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Please Provide a valid email address'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            ref={register}
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Please enter your preffered password"
                                },
                                minLength: {
                                    value: 8,
                                    message: "Password Length must be at least 8 characters"
                                },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&$])(?=.{8,})/,
                                    message: 'Password must include one small letter, one capital letter, one number and a special character (E.g: !@#%&$)'
                                },

                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                        </label>
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="confirm">Confirm Password</label><br />
                        <input type="password" name="confirm" id="confirm" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1"
                            {...register("confirm", {
                                required: {
                                    value: true,
                                    message: "Please confirm password",
                                },
                            })}
                        />
                        <label className="label">
                            {errors.confirm?.type === 'required' && <span className="label-text-alt text-red-500">{errors.confirm?.message}</span>}
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