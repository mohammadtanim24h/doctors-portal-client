import React from "react";
import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse md:mb-64">
                <img
                    src={chair}
                    className="w-80 md:w-2/5 rounded-lg shadow-2xl"
                    alt="dentist-chair"
                />
                <div className="md:mr-28">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;
