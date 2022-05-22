import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading/Loading";
import useToken from './../../hooks/useToken';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let loginError;
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [token] = useToken(user || user1)
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    await signInWithEmailAndPassword(email, pass);
  };
  useEffect(() => {
    if (user || user1) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token, user, user1]);
  if (error || error1) {
    loginError = (
      <p className="text-red-500">
        <small>{error?.message || error1?.message}</small>
      </p>
    );
  }
  if (loading || loading1) {
    return <Loading></Loading>;
  }
  const handleNewAccount = () => {
    navigate("/signup");
  };
  return (
    <div className="card h-screen w-screen bg-base-100 shadow-xl p-8 mx-auto my-4">
      <div className="text-center">
        <h1 className="text-5xl mb-9 font-bold">Login</h1>
      </div>
      <form
        onSubmit={handleSubmitLogin}
        className="grid grid-cols-1 pt-2.5 justify-items-center gap-3"
        action=""
      >
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
        <div className="w-full max-w-md">
          <p className="cursor-pointer">Forgot Password ?</p>
        </div>
        {loginError}
        <input
          className="btn w-full max-w-md text-white btn-accent"
          type="submit"
          value="Login"
        />
      </form>
      <div className="grid grid-cols-1  justify-items-center">
        <p className="pt-2">
          <span>New to Bicycle Odyssey? </span>
          <span
            onClick={handleNewAccount}
            className="text-secondary cursor-pointer"
          >
            Create new account
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

export default Login;
