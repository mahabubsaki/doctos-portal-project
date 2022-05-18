import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';



const AddDoctor = () => {
    const [loading, setLoading] = useState(false)
    const { toastConfig } = useContext(ToastContext)
    const handleModalInput = async (e) => {
        e.preventDefault();
        setLoading(true)
        const doctorInput = {
            doctor: e.target.name.value,
            speciality: e.target.speciality.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        }
        const formdata = new FormData();
        const image = e.target.image.files[0]
        const name = e.target.image.files[0].name
        formdata.append('image', image, name)
        try {
            const { data } = await axios.post('https://api.imgbb.com/1/upload?key=28f7e689e78cbdf683b41d414ebda692', formdata)
            if (data.data.display_url) {
                doctorInput.img = data.data.display_url
                try {
                    const { data } = await axios.post('http://localhost:5000/add-doctor', doctorInput, {
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('access_token')}`
                        }
                    })
                    if (data?.acknowledged) {
                        setLoading(false)
                        toast.success('Added Doctor successfully', toastConfig)
                        e.target.reset()
                    }
                    else {
                        setLoading(false)
                        toast.error('Doctor with given email already exists', toastConfig)
                        e.target.reset()
                    }
                }
                catch (e) {
                    setLoading(false)
                    toast.error("You don't have permission to add a doctor")
                    e.target.reset()
                }
            }
            else {
                setLoading(false)
                toast.error('Something went wrong, please try again', toastConfig)
                e.target.reset()
            }
        }
        catch (e) {
            setLoading(false)
            toast.error('Please try with a different image', toastConfig)
            e.target.reset()
        }
    }
    return (
        <div>
            <h1 className="text-center text-3xl text-projectPrimary">Add a doctor</h1>
            <form onSubmit={handleModalInput} className="w-3/4 mx-auto">
                <input type="text" className="w-full bg-[#E6E6E6] p-2 rounded-lg mb-4" name="name" required placeholder="Name" />
                <select className="select select-bordered w-full bg-[#E6E6E6] mb-4" name="speciality" defaultValue={""} required>
                    <option value="" disabled hidden>Select a Speciality</option>
                    <option value="Teeth Orthodontics">Teeth Orthodontics</option>
                    <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                    <option value="Teeth Cleaning">Teeth Cleaning</option>
                    <option value="Cavity Protection">Cavity Protection</option>
                    <option value="Pediatric Dental">Pediatric Dental</option>
                    <option value="Oral Surgery">Oral Surgery</option>
                </select>
                <input type="email" name="email" className="w-full border bg-[#E6E6E6] p-2 rounded-lg mb-4" required placeholder="Email" />
                <input type="tel" name="phone" className="w-full border bg-[#E6E6E6] p-2 rounded-lg mb-4" required placeholder="Phone Number" />
                <input type="file" name='image' className="w-full border bg-[#E6E6E6] p-2 rounded-lg mb-4" required />
                {loading &&
                    <div className="flex justify-center mb-2">
                        <svg role="status" class="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                    </div>
                }
                <button type="submit" className="mx-auto block bg-projectNeutral py-4 px-8 rounded-lg text-white">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;