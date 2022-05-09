import React from "react";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
    return (
        <div className="hero mt-4 md:mt-24 bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={chair}
                    className="max-w-lg rounded-lg shadow-2xl"
                    alt="chair"
                />
                <div className="md:mr-12">
                    <h1 className="text-5xl font-bold text-accent">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
