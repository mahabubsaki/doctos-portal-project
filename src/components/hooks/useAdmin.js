import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if (user?.email) {
            const checkUser = async () => {
                const { data } = await axios.put(`http://localhost:5000/admin?email=${user.email}`, { email: user.email }, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                })
                setAdmin(data.admin)
            }
            checkUser()
        }
    }, [user])
    return [admin, setAdmin]
}
export default useAdmin