import axios from 'axios';
import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';
import auth from '../../firebase.init';
import ResetPasswordModal from '../child/ResetPasswordModal';
import Loading from '../utilities/Loading';

const Login = () => {
    const navigate = useNavigate()
    const { toastConfig } = useContext(ToastContext)
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [actualError, setActualError] = useState('')
    const [resetModal, setResetModal] = useState(false)
    const [initialUser, initialLoading] = useAuthState(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        normalUser,
        normalLoading,
        normalError,
    ] = useSignInWithEmailAndPassword(auth);
    useEffect(() => {
        if (initialUser) {
            if (!googleUser || !normalUser) {
                navigate('/')
            }
        }
    }, [initialUser, normalUser, googleUser])
    useEffect(() => {
        if (googleUser) {
            const savegUserDb = async () => {
                await axios.put(`http://localhost:5000/user/${googleUser.user.email}`, { name: googleUser.user.displayName, lastLogin: format(new Date(), 'PP') })
                toast.success('Successfully logged in', toastConfig)
            }
            savegUserDb()
            const gUserToken = async () => {
                const { data } = await axios.get(`http://localhost:5000/token?email=${googleUser.user.email}`)
                localStorage.setItem('access_token', data.token)
            }
            gUserToken()
            navigate(from)
        }
        else if (normalUser) {
            const savenUserDb = async () => {
                await axios.put(`http://localhost:5000/user/${normalUser.user.email}`, { name: normalUser.user.displayName, lastLogin: format(new Date(), 'PP') })
                toast.success('Successfully logged in', toastConfig)
            }
            savenUserDb()
            const nUserToken = async () => {
                const { data } = await axios.get(`http://localhost:5000/token?email=${normalUser.user.email}`)
                localStorage.setItem('access_token', data.token)
            }
            nUserToken()
            navigate(from)
        }
    }, [googleUser, normalUser])
    useEffect(() => {
        if (actualError) {
            toast.error(actualError, toastConfig)
        }
    }, [actualError])
    useEffect(() => {
        if (googleError) {
            setActualError('Something went wrong!')
        }
        else if (normalError) {
            if (normalError?.message.includes('user-not-found')) {
                setActualError('User not found with given email address')
            }
            else if (normalError?.message.includes('wrong-password')) {
                setActualError('Password is wrong, please try again')
            }
            else {
                setActualError('Something went wrong!')
            }
        }
        else {
            setActualError('')
        }
    }, [googleError, normalError])
    const handleLogin = async (e) => {
        await signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
    }
    if (initialLoading || googleLoading || normalLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="min-h-[500px] flex justify-center items-center">
            <div className="w-[385px] mx-auto testimonial-card p-7">
                <h1 className="text-xl mb-9 text-center">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="w-full mb-3">
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name="email" id="email" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1" required />
                    </div>
                    <div className="w-full mb-3">
                        <label htmlFor="password">Password</label><br />
                        <input type="password" name="password" id="password" className="w-full rounded-lg border border-[#CFCFCF] p-2 mt-1" required />
                    </div>
                    <button className="text-sm text-white btn w-full bg-projectNeutral" type="submit">Login</button>
                </form>
                <label htmlFor="reset-modal" className="modal-button cursor-pointer" onClick={() => setResetModal(true)}>Forget Password?</label>
                {resetModal && <ResetPasswordModal
                    setResetModal={setResetModal}
                ></ResetPasswordModal>}
                <div className="flex flex-col w-full border-opacity-50 mt-3">
                    <div className="grid card rounded-box place-items-center">
                        <span className="text-xs">New to Doctors Portal? <Link to="/register" className="text-projectPrimary">Create new account</Link></span>
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

export default Login;