import React from 'react';

const ResetPasswordModal = ({ setResetModal }) => {
    const handleResetForm = (e) => {
        e.preventDefault();
        setResetModal(false);
    }
    return (
        <>
            <input type="checkbox" id="reset-modal" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box">
                    <label htmlFor="reset-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Reset Your Password</h3>
                    <form onSubmit={handleResetForm}>
                        <input type="email" name="email" id="email" className="w-full rounded-lg border border-[#CFCFCF] p-2 my-3" placeholder="Enter Your Email" />
                        <button className="text-sm text-white btn w-full bg-projectNeutral" type="submit">Reset Password</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ResetPasswordModal;