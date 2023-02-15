import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";

import { AiOutlineHeart } from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";


const UpperNavbar = () => {
  const [signInWithEmailAndPassword, eUser, eLoading, eError] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  if (eLoading) {
    <Loading />;
  }
  if (eUser) {
    toast("User Logged in successfully");
  }
  return (
    <div className="container mx-auto p-4">
      <div className="navbar text-white">
        <div className="navbar-start">

          <a href="#" className="btn btn-ghost normal-case text-xl xs:hidden" />

          <a href="/" className="btn btn-ghost normal-case text-xl xs:hidden" />

          <img style={{ height: "30px" }} src={logo} alt="logo" />
        </div>
        <div className="navbar-center">
          <div className=" bg-white">
            <form className="flex">
              <select className="select select-category select-bordered text-black">
                <option disabled defaultValue>
                  Categories
                </option>
                <option>One Piece</option>
                <option>Naruto</option>
                <option>Death Note</option>
                <option>Attack on Titan</option>
                <option>Bleach</option>
                <option>Fullmetal Alchemist</option>
                <option>Jojo's Bizarre Adventure</option>
              </select>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered w-72"
                />
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              htmlFor="my-modal-6"
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-7 rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g data-name="Layer 7" id="Layer_7">
                    <path
                      className="cls-1"
                      d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"
                    />
                  </g>
                </svg>
              </div>
            </label>
            <div tabIndex={0}>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <label
                    htmlFor="my-modal-6"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold text-black text-lg">LOGIN</h3>
                  <p className="py-4">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control ">
                        <label className="label">
                          <span className="label-text">Email</span>
                        </label>
                        <input
                          type="email"
                          placeholder="Type Your Email"
                          className="input input-bordered "
                          {...register("email", {
                            required: {
                              value: true,
                              message: " Email is required",
                            },
                            pattern: {
                              value: /.+@.+\.[A-Za-z]+$/,
                              message: "Provide a Valid Email",
                            },
                            // onBlur: (e) => setEmail(e.target.value),
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
                            required: {
                              value: true,
                              message: " Password is required",
                            },
                            pattern: {
                              value:
                                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/,
                              message: "Your Password is wrong",
                            },
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
                      <input
                        type="submit"
                        className="btn btn-accent px-6"
                        value="Login"
                      />
                      <Link to="/register" className="ml-3">
                        <input
                          type="button"
                          className="btn btn-accent"
                          value="Register"
                        />
                      </Link>
                    </form>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <NavLink to="/wishlist" className="btn text-[25px] btn-ghost btn-circle relative">
            <span className="absolute text-white bg-red-700 rounded px-1 text-[15px] top-0 right-0">2</span>
            <AiOutlineHeart />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg> */}
          </NavLink>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
