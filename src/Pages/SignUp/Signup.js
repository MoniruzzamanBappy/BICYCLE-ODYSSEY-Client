import React, { useEffect } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import Loading from "./../Shared/Loading/Loading";
import useToken from './../../hooks/useToken';

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let loginError;
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, error1] = useUpdateProfile(auth);
  const [signInWithGoogle, user1, loading1, error2] = useSignInWithGoogle(auth);
  const [token] = useToken(user || user1)
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const displayName = e.target.name.value;
    await updateProfile({ displayName });
    await createUserWithEmailAndPassword(email, pass);
  };
  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token, user, user1]);
  if (error || error1 || error2) {
    loginError = (
      <p className="text-red-500">
        <small>{error?.message || error1?.message || error2.message}</small>
      </p>
    );
  }
  if (updating || loading || loading1) {
    return <Loading></Loading>;
  }
  const handleHaveAccount = () => {
    navigate("/login");
  };
  return (
    <div className="card h-screen w-screen bg-base-100 shadow-xl p-4 mx-auto">
      <div className="text-center">
        <h1 className="text-5xl mb-9 font-bold">Sign Up</h1>
      </div>
      <form
        onSubmit={handleSubmitSignup}
        className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
        action=""
      >
        <div className="w-full max-w-md">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="w-full max-w-md">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-md"
          />
        </div>
        <div className="w-full max-w-md">
          <label className="label">
            <span className="label-text">Your Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input w-full max-w-md input-bordered "
          />
        </div>
        {loginError}
        <input
          className="btn text-white w-full max-w-md btn-accent"
          type="submit"
          value="Sign Up"
        />
      </form>
      <div className="grid grid-cols-1  justify-items-center">
        <p className="pt-2">
          <span
            onClick={handleHaveAccount}
            className="text-secondary cursor-pointer"
          >
            Already have an account?
          </span>
        </p>
        <div className="divider w-full max-w-md">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn w-full max-w-md text-white btn-accent"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
