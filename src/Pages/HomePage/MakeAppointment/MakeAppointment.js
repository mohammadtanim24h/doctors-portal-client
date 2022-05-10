import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
    return (
        <div style={{backgroundImage: `url(${appointment})`}} className="flex justify-around items-center p-8 md:p-0">
            <div className="lg:basis-0 grow">
                <img className="mt-[-160px] hidden lg:inline-block" src={doctor} alt="" />
            </div>
            <div className="lg:basis-0 grow lg:mr-6">
                <p className="text-secondary text-xl font-bold">
                    Appointment
                </p>
                <h4 className="text-white text-4xl my-6">
                    Make an appointment Today
                </h4>
                <p className="text-xl text-white">
                    Regular teeth cleaning by a dentist removes plaque that
                    may develop, even with careful brushing and flossing.
                    This is very important for getting at areas that are
                    hard to reach on your own. Professional cleaning
                    includes scaling and polishing. This procedure uses
                    instruments to loosen and remove deposits from the
                    teeth. Routine exams may include dental x-rays. Your
                    dentist can catch problems early, so they do not become
                    more serious and expensive to fix.
                </p>
                <div className="mt-6">
                    <PrimaryButton></PrimaryButton> 
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;
