import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
  useAuthState,
  useSignOut,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BiUser } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import auth from "../../../firebase.config";

const UpperNavbar = () => {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  console.log(user);
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


  return (
    <div className="">
      <div className="container mx-auto p-4">
        <div className="navbar text-black">
          <div className="navbar-start w-[28%]">
            <a
              href="#"
              className="btn btn-ghost normal-case text-xl xs:hidden"
            />

            <a
              href="/"
              className="btn btn-ghost normal-case text-xl xs:hidden"
            />

            <img style={{ height: "30px" }} src={logo} alt="logo" />
          </div>
          <div className="navbar-center">
            <div className=" bg-white">
              <form className="flex">
                <div className="form-control w-full max-w-xs relative">
                  {/* serarch icon area */}
                  <div className="absolute w-[18%] p-[15px] bg-primary-all text-white rounded-l-[9999px]">
                    <FaSearch />
                  </div>
                  {/* serarch icon area */}
                  <input
                    type="text"
                    placeholder="Find Product by Category,name etc..."
                    className="input input-bordered w-[40rem] pl-[70px] rounded-full"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="navbar-end flex  items-center">
            <NavLink
              to="/login"
            >
              {user ? <span className="hidden">Login</span> : <button className="visible text-base font-semibold mr-5 border p-2 rounded-lg border-slate-300">Login</button>}
            </NavLink>
            {user && <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost border rounded-full border-slate-300 btn-circle avatar">
                <BiUser className="w-[50%] h-[30px]" />
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li>
                  <a
                    onClick={async () => {
                      const success = await signOut();
                      if (success) {
                        toast("You are sign out");
                      }
                    }}
                  >
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>}
            {user && (
              <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-ghost m-1">
                  <span className="text-sm">{user?.displayName}</span>
                </label>
              </div>
            )}

            <NavLink
              to="/wishlist"
              className="btn text-[25px] btn-ghost btn-circle relative"
            >
              <span className="absolute text-white bg-red-700 rounded px-1 text-[15px] top-0 right-0">
                2
              </span>
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
    </div>
  );
};

export default UpperNavbar;
