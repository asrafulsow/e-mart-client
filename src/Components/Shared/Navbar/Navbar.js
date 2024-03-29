import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import RecentView from "../RecentView/RecentView";
import auth from "../../../firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
    </>
  );


  // fetch product
  const [recentViews, setRecentView] = useState([])

  useEffect(() => {
    fetch("https://emart-xcpi.onrender.com/products")
      .then(res => res.json())
      .then(data => setRecentView(data))
  }, [])

  return (
    <div className="container mx-auto md:px-4 bg-primary-all box-shadow w-full">
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <a href="/">
                  RECENT VIEWED
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="p-2 text-black bg-white border h-[400px] z-20 w-[360px] text-left overflow-x-hidden">
                  {
                    recentViews?.slice(0, 5).map((singleView) => <RecentView key={singleView._id} singleView={singleView} />)
                  }
                </ul>
              </li>
            </ul>
          </Link>
          {user && <Link to="/dashboard">
            <ul>
              <li className="font-bold">Dashboard</li>
            </ul>
          </Link>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
