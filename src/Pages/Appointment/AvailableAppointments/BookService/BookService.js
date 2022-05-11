import React from "react";

const BookService = ({ service }) => {
    const {name, slots} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center">{name}</h2>
                <p className="text-center">{slots.length > 0 ? slots[0] : ''}</p>
                <p className="text-center">{slots?.length} {slots?.length > 1 ? 'slots' : 'slot'} available</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary rounded-lg text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default BookService;
