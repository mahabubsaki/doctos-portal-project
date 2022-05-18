import axios from 'axios';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { ToastContext } from '../../App';



const AddDoctor = () => {
    const { toastConfig } = useContext(ToastContext)
    const handleModalInput = async (e) => {
        e.preventDefault();
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
                        toast.success('Added Doctor successfully', toastConfig)
                        e.target.reset()
                    }
                    else {
                        toast.error('Doctor with given email already exists', toastConfig)
                        e.target.reset()
                    }
                }
                catch (e) {
                    toast.error("You don't have permission to add a doctor")
                    e.target.reset()
                }
            }
            else {
                toast.error('Something went wrong, please try again', toastConfig)
                e.target.reset()
            }
        }
        catch (e) {
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
                <button type="submit" className="mx-auto block bg-projectNeutral py-4 px-8 rounded-lg text-white">Submit</button>
            </form>
        </div>
    );
};

export default AddDoctor;