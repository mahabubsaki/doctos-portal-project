import React from 'react';

const BookingModal = ({ treatment }) => {
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-10">{treatment.name}</h3>
                    <input type="text" name="" id="" className="w-full bg-[#E6E6E6] p-3 rounded-lg" />
                </div>
            </div>
        </>
    );
};

export default BookingModal;