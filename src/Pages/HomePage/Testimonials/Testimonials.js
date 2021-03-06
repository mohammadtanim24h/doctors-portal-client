import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
import Review from "./Review/Review";

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            address: 'Canada',
            review: "The services that I receive from Doctors Portal is excellent. Dr. Larry and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to friendly and friends.",
            img: people1,
        },
        {
            _id: 2,
            name: "Robert hallway",
            address: 'USA',
            review: "Wonderful experience with Doctors Portal. Dr. Jim was a wonderful surgeon, and the staff was always helpful and kind. They ensured I had a smooth prep, surgery, and follow-up. I am so glad I chose Doctors Portal and would highly recommend to anyone.",
            img: people2,
        },
        {
            _id: 3,
            name: "Sarah Fier",
            address: 'England',
            review: "Great medical office, wonderful and warm experience from start to finish. Appreciate Dr. Larry taking time to go over the diagnosis clearly and treatment options. Was referred over by my general doctor and can see why. Highly recommended.",
            img: people3,
        },
    ];
    return (
        <section className="container mx-auto my-20">
            <div className="flex justify-between px-4 py-2">
                <div>
                    <h4 className="text-secondary text-xl font-bold">
                        Testimonial
                    </h4>
                    <h3 className="text-accent text-4xl">
                        What Our Patients Say
                    </h3>
                </div>
                <div>
                    <img className="w-28 md:w-48" src={quote} alt="quote" />
                </div>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
                {
                    reviews.map(review => <Review key={review._id} reviewInfo={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;
