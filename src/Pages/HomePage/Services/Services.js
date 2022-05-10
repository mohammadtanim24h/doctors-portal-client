import React from "react";
import Service from "./Service/Service";

const Services = () => {
    const servicesArr = [
        { id: 2, name: "Fluoride Treatment", img: "https://i.ibb.co/HFYDrXk/fluoride.png" },
        { id: 1, name: "Cavity Filling", img: "https://i.ibb.co/gzbSzKc/cavity.png" },
        { id: 3, name: "Teeth Whitening", img: "https://i.ibb.co/zVpdQvs/whitening.png" },
    ];
    return (
        <div className="my-8">
            <p className="text-xl font-bold text-secondary text-center uppercase">
                Our Services
            </p>
            <h3 className="text-accent text-center text-4xl mb-8">
                Services we provide
            </h3>
            <div className="container mx-auto mt-12">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
                    {
                        servicesArr.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
