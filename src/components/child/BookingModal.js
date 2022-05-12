import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ treatment, date }) => {
    const handleModalInput = (e) => {
        e.preventDefault();
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
                        <input type="text" className="w-full bg-[#E6E6E6] p-2 rounded-lg mb-4" value={treatment.slots[0]} readOnly disabled />
                        <input type="text" name="name" className="w-full border border-[#CFCFCF] p-2 rounded-lg mb-4" placeholder="Full Name" required />
                        <input type="tel" name="phone" className="w-full border border-[#CFCFCF] p-2 rounded-lg mb-4" required placeholder="Phone Number" />
                        <input type="email" name="email" className="w-full border border-[#CFCFCF] p-2 rounded-lg mb-4" required placeholder="Email" />
                        <button type="submit" className="w-full bg-projectNeutral p-2 rounded-lg text-white">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;