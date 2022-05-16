import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../hooks/useAdmin';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, setAdmin, adminLoading, setAdminLoading] = useAdmin(user)

    let location = useLocation();

    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    if (!user || !admin) {
        return <Navigate to="/" />;
    }

    return children;
};

export default RequireAdmin;