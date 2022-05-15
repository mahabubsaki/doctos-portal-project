import { signOut } from "firebase/auth";
import React, { Component } from "react";
import Swal from "sweetalert2";
import auth from "../../firebase.init";

export default class LogoutAlert extends Component {

    constructor() {
        super();
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClick() {
        Swal.fire({
            ...this.props,
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

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.HandleClick}>
                    Sign Out
                </button>
            </div>
        );
    }
}
