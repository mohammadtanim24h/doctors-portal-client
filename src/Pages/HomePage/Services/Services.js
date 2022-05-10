import React from "react";
import Service from "./Service/Service";

const Services = () => {
    const services = [
        { _id: 1, name: "Fluoride Treatment", description: "", img: "https://i.ibb.co/HFYDrXk/fluoride.png" },
        { _id: 2, name: "Cavity Filling", description: "", img: "https://i.ibb.co/gzbSzKc/cavity.png" },
        { _id: 3, name: "Teeth Whitening", description: "", img: "https://i.ibb.co/zVpdQvs/whitening.png" },
    ];
    return (
        <div className="my-8">
            <p className="text-xl font-bold text-secondary text-center uppercase">
                Our Services
            </p>
            <h3 className="text-accent text-center text-4xl">
                Services we provide
            </h3>
            <div className="container mx-auto mt-16">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
