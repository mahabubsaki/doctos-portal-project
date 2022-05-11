import React from 'react';

const ContactForm = () => {
    return (
        <div className="home-appointment mt-36">
            <div className="max-w-xs sm:max-w-md mx-auto py-20 text-center">
                <h1 className="text-projectSecondary text-xl mb-2">Contact Us</h1>
                <h1 className="text-white text-4xl mb-10">Stay connected with us</h1>
                <form>
                    <input type="email" name="email" id="" className="w-full rounded-lg mb-4 p-4" placeholder='Email Address' /><br />
                    <input type="text" name="subject" id="" className="w-full rounded-lg mb-4 p-4" placeholder='Subject' /><br />
                    <textarea className="w-full rounded-lg mb-4 p-4" placeholder="Your Message" id="message" rows="10" style={{ resize: "none" }}></textarea>
                    <button className="mt-4 btn bg-projectSecondary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;