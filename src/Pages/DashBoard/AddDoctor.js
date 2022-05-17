import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading/Loading";

const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const { data: services, isLoading } = useQuery("services", () =>
        fetch("http://localhost:5000/services").then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    /**
     * 3 Ways to store images
     * 1. Third party storage eg. Imgbb (free open public storage is okay for practice project)
     * 2. My own storage in my own server (file system). amar server e kuno ekta file system thakbe sheta access kore store korte hobe
     * 3. Database eg. Mongodb
     * 
     * YUP: to validate file. // Search YUP file validation for react hook form
    */

    const imageStorageKey = '430227413d25713dc9257dcf7feacc7e';

    const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img,
                }
                // send doctor data to my database
            }
            console.log('imgbb result', result);
        })
    };

    return (
        <div>
            <h2 className="text-2xl text-slate-700">Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Name */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Name is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === "required" && (
                            <span className="text-red-500">
                                {errors.name.message}
                            </span>
                        )}
                    </label>
                </div>

                {/* Email */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is Required",
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: "Provide a valid Email Address",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === "required" && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span className="text-red-500">
                                {errors.email.message}
                            </span>
                        )}
                    </label>
                </div>

                {/* Specialty */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                    </label>
                    <select
                        {...register("specialty")}
                        className="select select-bordered w-full max-w-xs"
                    >
                        {services?.map(({ name, _id }) => (
                            <option key={_id} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Image field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image</span>
                    </label>
                    <input
                        type="file"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required",
                            },
                        })}
                    />
                    <label className="label">
                        {errors.image?.type === "required" && (
                            <span className="text-red-500">
                                {errors.image.message}
                            </span>
                        )}
                    </label>
                </div>

                <input
                    className="btn text-white w-full max-w-xs"
                    type="submit"
                    value="Add"
                />
            </form>
        </div>
    );
};

export default AddDoctor;
