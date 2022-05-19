import React, { useContext } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../utilities/Loading';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
    const { toastConfig } = useContext(ToastContext)
    const [user, loading] = useAuthState(auth);
    const handleModalInput = (e) => {
        e.preventDefault();
        const userInput = {
            id: Math.round(Math.random() * 1000000000).toString(16),
            treatment: treatment.name,
            slot: e.target.slot.value,
            name: user?.displayName,
            phone: e.target.phone.value,
            date: format(date, 'PP'),
            price: treatment.price,
            email: user?.email
        }
        const saveBooking = async () => {
            const { data } = await axios.post('http://localhost:5000/bookings', userInput, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            })
            if (data.acknowledged) {
                toast.success('Booked successfully', toastConfig)
                refetch()
            }
            else {
                toast.error(`You have already booked an appointment on ${format(date, 'PP')} for ${treatment.name}`)
            }
        }
        saveBooking()
        setTreatment(null)
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-6">{treatment.name}</h3>
                    <form onSubmit={handleModalInput}>
                        <input type="text" className="w-full bg-[#E6E6E6] p-2 rounded-lg mb-4" readOnly disabled value={format(date, 'PP')} />
                        <select className="select select-bordered w-full mb-4" name="slot" defaultValue={""} required>
                            <option value="" disabled hidden>Select a slot</option>
                            {treatment?.slots?.map(slot => <option
                                key={treatment.slots.indexOf(slot)}
                                value={slot}
                            >{slot}</option>)}
                        </select>
                        <input type="text" name="name" className="w-full border bg-[#E6E6E6] p-2 rounded-lg mb-4" value={user?.displayName} readOnly disabled />
                        <input type="email" name="email" className="w-full border bg-[#E6E6E6] p-2 rounded-lg mb-4"
                            value={user?.email} readOnly disabled />
                        <input type="tel" name="phone" className="w-full border border-[#CFCFCF] p-2 rounded-lg mb-4" required placeholder="Phone Number" />
                        <button type="submit" className="w-full bg-projectNeutral p-2 rounded-lg text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;