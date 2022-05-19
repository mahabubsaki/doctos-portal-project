import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import NotFound from './NotFound';

const Payment = () => {
    const { toastConfig } = useContext(ToastContext)
    const navigate = useNavigate()
    const [invalidId, setInvalidId] = useState(false)
    const { serviceId } = useParams()
    const { data, isLoading } = useQuery(['singleService', serviceId], async () => {
        try {
            return await axios({
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                },
                url: `http://localhost:5000/payment?id=${serviceId}`
            })

        }
        catch (err) {
            if (err.response.status === 404) {
                setInvalidId(true)
            }
            else {
                localStorage.removeItem('access_token')
                signOut(auth)
                navigate('/')
                toast.error('Something went wrong', toastConfig)
            }
        }
    })
    const { date, email, slot, name, treatment, price } = data?.data || {}
    if (invalidId) {
        return <NotFound></NotFound>
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl font-bold">Hello there <span className="text-projectPrimary">{name}</span></h1>
                    <p className="py-4">You have an appointment on <span className="text-orange-500">{date}</span> at <span className="text-projectSecondary">{slot}</span> timeslot</p>
                    <p>Treatment : {treatment}</p>
                    <p className="py-4">Price : {price}</p>
                    <button className="btn btn-primary">Pay Now</button>
                </div>
            </div>
        </div>
    );
};

export default Payment;