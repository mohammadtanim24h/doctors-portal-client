import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../Firebase/firebase.init";

const BookingModal = ({treatment, date, setTreatment, refetch}) => {
    const [user] = useAuthState(auth);
    const {_id, slots, name} = treatment;
    const formattedDate = date && format(date, "PP");
    
    const handleBooking = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        const phone = e.target.phone.value;

        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot: slot,
            patientEmail: user.email,
            patientName: user.displayName,
            phone: phone,
        }

        // Send data to backend
        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.success){
                    toast.success(`Your Booking Was successfull! Appointment at ${formattedDate} ${slot}`);
                }
                else {
                    toast.error(`You Already have an appointment on ${data?.booking?.date}, at ${data?.booking?.slot}`);
                }

                // to close the modal
                refetch();
                setTreatment(null);
            })

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
                            {slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)}
                        </select>
                        {/* Time Slot Dropdown end */}
                        <input type="text" value={user?.displayName || ''} disabled className="input input-bordered w-full max-w-lg" required />
                        <input type="email" value={user?.email || ''} disabled name="email" className="input input-bordered w-full max-w-lg" required />
                        <input type="number" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-lg" />
                        <input type="submit" value="Book" className="btn btn-secondary w-full max-w-lg  px-8 py-2 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
