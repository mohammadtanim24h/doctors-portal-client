import React from "react";
import auth from "../../Firebase/firebase.init";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user) {
        console.log(user);
    }
    if(error) {
        console.error(error);
    }
    return (
        <div className="flex justify-center items-center mt-24">
            <div className="card w-96 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title justify-center mb-16">Login</h2>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline" onClick={() => signInWithGoogle()}>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
