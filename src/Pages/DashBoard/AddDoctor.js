import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
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
                    <input
                        type="text"
                        placeholder="Specialty"
                        className="input input-bordered w-full max-w-xs"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "Specialty is Required",
                            }
                        })}
                    />
                    <label className="label">
                        {errors.specialty?.type === "required" && (
                            <span className="text-red-500">
                                {errors.specialty.message}
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
