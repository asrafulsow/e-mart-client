import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../Shared/Loading/Loading";
import auth from "../../firebase.config";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, rSending, rError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  const handleForgotPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent reset email");
    } else {
      toast("Provide an email address");
    }
  };
  let signInError;
  if (gError || eError || rError) {
    signInError = (
      <p className="text-red-600">{gError?.message || eError?.message}</p>
    );
  }
  if (gLoading || eLoading || rSending) {
    return <Loading />;
  }
  if (eUser) {
    toast("User Logged in successfully");
  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className="card w-2/5 bg-base-100 ">
        <div className="card-body">
          <h2 className="text-start text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Type Your Email"
                className="input input-bordered"
                {...register("email", {
                  required: { value: true, message: " Email is required" },
                  // pattern: {
                  //   value: /.+@.+\.[A-Za-z]+$/,
                  //   message: "Provide a Valid Email",
                  // },
                  onBlur: (e) => setEmail(e.target.value),
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-600">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type Your Password"
                className="input input-bordered"
                {...register("password", {
                  required: { value: true, message: " Password is required" },
                  // pattern: {
                  //   value:
                  //     /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
                  //   message: "Your Password is wrong",
                  // },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <p>
              <small className="cursor-pointer">
                <button onClick={handleForgotPassword}>Forget password?</button>
              </small>
            </p>
            {signInError}
            <input
              type="submit"
              className="btn btn-accent w-full"
              value="Login"
            />
            <ToastContainer limit={1}></ToastContainer>
          </form>
          <p>
            <small>
              {" "}
              New user ?{" "}
              <Link className="text-orange-400" to="/register">
                Create New Account
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
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
