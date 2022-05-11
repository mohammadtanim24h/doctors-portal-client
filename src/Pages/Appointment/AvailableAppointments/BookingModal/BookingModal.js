import React from "react";

const BookingModal = ({treatment}) => {
    const {slots, name} = treatment;
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm text-white btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">
                        Booking for: {name}
                    </h3>
                    <p className="py-4">
                        You've been selected for a chance to get one year of
                        subscription to use Wikipedia for free!
                    </p>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn bg-secondary text-white outline-0 border-0">
                            Book!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;
