import React from "react";
import chair from "../../../assets/images/chair.png";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen banner-doctor">
            <div className="hero-content flex-col lg:flex-row-reverse md:mb-52">
                <img
                    src={chair}
                    className="w-80 md:w-2/5 rounded-lg shadow-2xl"
                    alt="chair"
                />
                <div className="md:mr-12">
                    <h1 className="text-5xl font-bold text-accent">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Doctors Portals experienced team of professionals
                        provides continuing and comprehensive health care for
                        the individual and family across all ages, genders,
                        diseases, and parts of the body.
                    </p>
                    <PrimaryButton></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
