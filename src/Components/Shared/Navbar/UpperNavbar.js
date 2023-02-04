import React from "react";
import logo from "../../../images/logo.png";

const UpperNavbar = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="navbar text-white">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl xs:hidden">
            <img style={{ height: "30px" }} src={logo} alt="logo" />
          </a>
        </div>
        <div className="navbar-center">
          <div className=" bg-white">
            <form className="flex">
              <select className="select select-category select-bordered text-black">
                <option disabled selected>
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
                  className="input input-bordered "
                />
              </div>
            </form>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-7 rounded-full">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
                >
                  <g data-name="Layer 7" id="Layer_7">
                    <path
                      class="cls-1"
                      d="M19.75,15.67a6,6,0,1,0-7.51,0A11,11,0,0,0,5,26v1H27V26A11,11,0,0,0,19.75,15.67ZM12,11a4,4,0,1,1,4,4A4,4,0,0,1,12,11ZM7.06,25a9,9,0,0,1,17.89,0Z"
                    />
                  </g>
                </svg>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-black text-white rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-ghost btn-circle">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
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
