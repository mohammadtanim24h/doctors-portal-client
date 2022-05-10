import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className='h-screen' style={{backgroundImage: `url(${appointment})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <h4 className='text-center text-secondary text-xl pt-24 lg:pt-60 font-bold'>Contact Us</h4>
            <h2 className='text-center text-white text-4xl mb-4'>Stay Connected With Us</h2>
            <div className='flex justify-center items-center'>
                <div>
                    <input type="text" placeholder="Email Address" className="input input-bordered w-80 lg:w-96 block mb-2" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-80 lg:w-96 block mb-2" />
                    <textarea className="textarea w-80 lg:w-96 textarea-bordered block mb-2" placeholder="Your Message"></textarea>
                    <div className='mt-4 text-center'>
                        <button className='btn border-0 outline-0 px-8 text-white bg-gradient-to-r from-secondary to-primary text-center'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;