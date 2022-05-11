import React from "react";

const BookService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary justify-center">
                    {name}
                </h2>
                <p className="text-center">
                    {slots.length > 0 ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-red-500">Try another date</span>
                    )}
                </p>
                <p className="text-center">
                    {slots?.length} {slots?.length > 1 ? "slots" : "slot"}{" "}
                    available
                </p>
                <div className="card-actions justify-center">
                    {/* another way to do disabled : 
                        disabled={slots.length === 0} karon jokhon slots.length 0 tokhon slots.length === 0 ei condition ta true return kore and button er disabled true hoye jay.
                    */}
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0 ? "true?" : ""}
                        htmlFor="booking-modal"
                        className="btn btn-secondary rounded-lg text-white"
                    >
                        Book Appointment
                    </label>
                    {/* label er moddhe oboshhoi sothik htmlFor use korte hobe. modal component e jei id ta disi oita htmlFor er moddhe boshate hobe. nahole modal show hobe na. */}
                </div>
            </div>
        </div>
    );
};

export default BookService;
