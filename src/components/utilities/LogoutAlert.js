import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

import React from 'react';

const LogoutAlert = ({ props }) => {
    const { title, icon, text, btnType } = props
    const handleSignout = () => {
        Swal.fire({
            text: text,
            icon: icon,
            title: title,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem('access_token')
                signOut(auth)
            }
        });
    }
    return (
        <button className={`${btnType} mx-1`} onClick={handleSignout}>
            Sign Out
        </button>
    );
};

export default LogoutAlert;

