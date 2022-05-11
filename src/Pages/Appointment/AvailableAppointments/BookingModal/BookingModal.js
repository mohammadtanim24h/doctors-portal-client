import React from "react";

const BookingModal = ({treatment}) => {
    const {slots, name} = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-6">
                        {name}
                    </h3>
                    <form className="grid grid-cols-1 gap-3 justify-items-center">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-lg" />
                        <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-lg" />
                        <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Book" className="btn btn-secondary w-full max-w-lg  px-8 py-2 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
