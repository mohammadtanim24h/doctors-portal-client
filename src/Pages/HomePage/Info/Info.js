import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";

const Info = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-8">
            <div className="bg-gradient-to-r from-secondary to-primary text-white w-80 md:w-1/4 px-8 py-6 mx-8 my-2 md:my-0 rounded-lg flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0">
                    <img src={clock} alt="clock" />
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-medium">Opening Hours</h3>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div className="bg-accent text-white w-80 md:w-1/4 px-8 py-6 mx-8 my-2 md:my-0 rounded-lg flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0">
                    <img src={marker} alt="marker" />
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-medium">Visit our location</h3>
                    <p>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="bg-gradient-to-r from-secondary to-primary text-white w-80 md:w-1/4 px-8 py-6 mx-8 my-2 md:my-0 rounded-lg flex flex-col md:flex-row items-center">
                <div className="mb-4 md:mb-0">
                    <img src={phone} alt="phone" />
                </div>
                <div className="ml-6">
                    <h3 className="text-xl font-medium">Contact us now</h3>
                    <p>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Info;
