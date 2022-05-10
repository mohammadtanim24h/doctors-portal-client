import React from "react";

const Review = ({reviewInfo}) => {
    const {name, img, review, address} = reviewInfo;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body text-xl">
                <p>{review.length > 150 ? review.slice(0, 150) + '...' : review}</p>
            </div>
            <div className="flex items-center">
                <div className="avatar p-6">
                    <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="reviewer"/>
                    </div>
                </div>
                <div className="ml-4">
                    <h4 className="text-2xl font-medium">{name}</h4>
                    <p className="text-xl">{address}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;
