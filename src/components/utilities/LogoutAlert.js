import { signOut } from "firebase/auth";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

import React from 'react';

const LogoutAlert = ({ props }) => {
    const { title, type, text, btnType } = props
    const handleSignout = () => {
        Swal.fire({
            text: text,
            type: type,
            title: title,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            onOpen: () => {
                // code
            }
        }).then((result) => {
            if (result.value) {
                signOut(auth)
            }
        });
    }
    return (
        <button className={btnType} onClick={handleSignout}>
            Sign Out
        </button>
    );
};

export default LogoutAlert;

