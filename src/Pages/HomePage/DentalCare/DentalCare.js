import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const DentalCare = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={treatment}
                    className="w-80 md:w-1/3 rounded-lg md:shadow-2xl"
                    alt="treatment"
                />
                <div className="ml-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        Exceptional Dental <br /> Care, on Your Terms
                    </h1>
                    <p className="py-6">
                        Primary care is the care delivered with the patient and
                        community first in the mind. It is traditionally the
                        point of first contact for the patient when a medical
                        illness, issue or concern arises. Primary care not only
                        treats the patients when they are ill but it works with
                        the patients when they are healthy to establish strong
                        health maintenance skills by disease prevention and
                        health education.
                    </p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;
