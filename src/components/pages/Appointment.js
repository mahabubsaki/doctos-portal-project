import React, { useContext, useEffect, useState } from 'react';
import AvailableAppointment from '../child/AvailableAppointment';
import CalenderBanner from '../child/CalenderBanner';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import Loading from '../utilities/Loading';
import { signOut } from 'firebase/auth';
import { ToastContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    const [user, loading] = useAuthState(auth);
    const { toastConfig } = useContext(ToastContext)
    const navigate = useNavigate()
    useEffect(() => {
        const verify = async () => {
            try {
                await axios.post(`http://localhost:5000/verify?email=${user?.email}`, user?.email, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                })
            }
            catch (err) {
                localStorage.removeItem('access_token')
                signOut(auth)
                navigate('/')
                toast.error('Something went wrong!', toastConfig)
            }
        }
        verify()
    }, [user])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <CalenderBanner date={date} setDate={setDate}></CalenderBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
        </>
    );
};

export default Appointment;