import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import TableRow2 from './TableRow2';

const AllUsers = () => {
    const [user1, loading] = useAuthState(auth);
    const { data, isLoading, refetch } = useQuery('users', async () => {
        return await axios.post('http://localhost:5000/all-users', '', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('access_token')}`
            }
        }
        )
    })
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className="text-projectSecondary text-center text-2xl my-3">Total {data?.data?.length} users in this site</h1>
            <table className="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Last Login</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data?.map((user, index) => <TableRow2
                            key={index}
                            user={user}
                            no={index + 1}
                            initialUser={user1}
                        ></TableRow2>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;