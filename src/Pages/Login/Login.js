import React, { useEffect } from "react";
import auth from "../../Firebase/firebase.init";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../hooks/useToken";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // React hook form
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    // Firebase hooks sign in using email and password
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

    const onSubmit = (data) => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    };

    // Firebase hooks google sign in
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(auth);

    const [token] = useToken(user || googleUser);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token]);

    if (loading || googleLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="flex justify-center items-center md:mt-24">
            <div className="card w-96 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                        message:
                                            "Provide a valid Email Address",
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

                        {/* Password */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 characters or long",
                                    },
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === "required" && (
                                    <span className="text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="text-red-500">
                                        {errors.password.message}
                                    </span>
                                )}
                            </label>
                        </div>

                        {error && (
                            <p className="text-center text-red-500 mb-3">
                                {error && error.message}
                            </p>
                        )}

                        <input
                            className="btn text-white w-full max-w-xs"
                            type="submit"
                            value="Login"
                        />
                    </form>

                    <p className="text-center">
                        New to Doctors Portal?{" "}
                        <Link to="/signup" className="text-secondary">
                            Create an account
                        </Link>
                    </p>

                    <div className="divider">OR</div>

                    {googleError && (
                        <p className="text-center text-red-500 mb-3">
                            {googleError.message}
                        </p>
                    )}

                    <button
                        className="btn btn-outline"
                        onClick={() => signInWithGoogle()}
                    >
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
