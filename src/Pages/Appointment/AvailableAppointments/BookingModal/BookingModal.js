import { format } from "date-fns";
import React from "react";

const BookingModal = ({treatment, date, setTreatment}) => {
    const {slots, name} = treatment;
    
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        

        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary mb-6">
                        {name}
                    </h3>
                    <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-items-center">
                        <input type="text" value={date && format(date, "PP")} disabled className="input input-bordered w-full max-w-lg" />
                        {/* Time Slot Dropdown start */}
                        <select name="slot" className="select select-bordered w-full max-w-lg">
                            {slots.map(slot => <option value={slot}>{slot}</option>)}
                        </select>
                        {/* Time Slot Dropdown end */}
                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered w-full max-w-lg" required />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" required />
                        <input type="email" name="email" placeholder="Email" className="input input-bordered w-full max-w-lg" required />
                        <input type="submit" value="Book" className="btn btn-secondary w-full max-w-lg  px-8 py-2 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
