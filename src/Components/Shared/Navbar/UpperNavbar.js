import React, { useEffect, useState } from "react";
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

// add to cart import area start
import { RxCross1 } from "react-icons/rx";
import cartImg from "../../../imagess/mobile-product7.png";
import { coolGray } from "tailwindcss/colors";
// add to cart import area end

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
    signInWithEmailAndPassword(data?.email, data?.password);
  };
  if (eLoading) {
    <Loading />;
  }

  // add to cart item area start
  const [showCart, setShowCart] = useState(false);
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Capable countertop microwave oven",
      image: cartImg,
      price: 100,
    },
    {
      id: 2,
      name: "Capable oven",
      image: cartImg,
      price: 200,
    },
  ]);
  const [amounts, setAmounts] = useState([
    {
      id: 1,
      amount: 1,
      price: 100,
    },
    {
      id: 2,
      amount: 1,
      price: 200,
    },
  ]);
  const [Subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    let totalAmount = 0;
    for (let i = 0; i < amounts.length; i++) {
      totalAmount = totalAmount + (amounts[i].amount * amounts[i].price);
    }
    setSubtotal(totalAmount)

  }, [amounts]);

  const amountIncrease = (id) => {
    const others = amounts.filter((p) => p.id != id);
    const product = amounts.find((p) => p.id == id);
    product.amount = product.amount + 1;
    others.push(product);
    setAmounts(others);

  };
  const amountDecrease = (id) => {
    const others = amounts.filter((p) => p.id != id);
    const product = amounts.find((p) => p.id == id);
    if (product.amount > 0) {
      product.amount = product.amount - 1;
    }

    others.push(product);
    setAmounts(others);

  };

  const removeFromCart = (id) => {
    const remainingCart = cart.filter(c => c.id != id)
    const remainingAmounts = amounts.filter(c => c.id != id)
    setCart(remainingCart)
    setAmounts(remainingAmounts)

  }
  const removeAllItems = () => {
    setCart([])
    setAmounts([])

  }


  // add to cart item area end



  return (
    <div>
      {/* add to cart section  */}
      {showCart ? (
        <section className="fixed top-0 right-0 w-screen h-screen z-[999]">
          <div className="w-full h-full relative">
            <div
              onClick={() => {
                setShowCart(false);
              }}
              className="w-full h-full absolute bg-black z-[9999] opacity-50"
            ></div>
            <div className="w-[400px] h-screen absolute top-0 right-0 bg-white z-[99999] py-8 px-6">
              <div className="h-[80vh] relative">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold">Cart (5)</h4>
                  <div className=" flex items-center">
                    <button className="p-0  cursor-pointer hover:text-[#ff00009f] mr-3 border border-slate-800 border-b-2 border-t-0 border-l-0 border-r-0" onClick={removeAllItems}>
                      Clear all
                    </button>
                    <button
                      className="cursor-pointer "
                      onClick={() => setShowCart(false)}
                    >
                      <RxCross1 />
                    </button>
                  </div>
                </div>

                {/* Items  */}

                {cart?.map((c) => {
                  const amount = amounts.find((a) => a.id == c.id).amount;
                  return (
                    <div className="flex justify-between items-center gap-4 mb-6">
                      <img src={cartImg} alt="" className="w-[60px] h-auto" />
                      <div>
                        <div className="flex justify-between items-start gap-10">
                          <div>
                            <p>{c.name}</p>
                            <p className="font-semibold mt-1">{c.price}</p>
                          </div>
                          <div>
                            <button
                              className="cursor-pointer "
                              onClick={() => removeFromCart(c.id)}
                            >
                              <RxCross1 />
                            </button>
                          </div>
                        </div>

                        <div className="flex justify-between items-center gap-10 mt-1">
                          <div className="flex items-center border ">
                            <button
                              className="bg-[#FAFAFA] px-1 mb-1 border-r font-bold text-lg"
                              onClick={() => amountDecrease(c.id)}
                            >
                              -
                            </button>
                            <p className="px-3 font-semibold">{amount}</p>
                            <button
                              className="bg-[#FAFAFA] px-1 mb-1 border-l  font-bold text-lg"
                              onClick={() => amountIncrease(c.id)}
                            >
                              +
                            </button>
                          </div>
                          <p className="font-semibold">${amount * c.price}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="absolute bottom-4 left-0 w-full px-6">
                <div className="w-full border-b-2"></div>
                <div className="flex justify-between items-center mt-2">
                  <h6 className="uppercase text-base font-semibold">
                    Subtotal :
                  </h6>
                  <h6 className="text-[#F61818] text-base font-semibold">
                    ${Subtotal}
                  </h6>
                </div>
                <div className="flex justify-between items-center mt-4">
                  {/* view Cart button start */}
                  <Link to="/viewCart">
                    <button onClick={() => setShowCart(false)} className="uppercase py-3 px-10  border-2 border-black bg-transparent font-bold text-xs text-black">
                      View cart
                    </button>
                  </Link>
                  {/* view Cart button end */}
                  <Link to="/checkout"><button onClick={() => setShowCart(false)} className="uppercase py-[14px] px-11  border-non3 bg-[#F50000] font-bold text-xs text-white">
                    Checkout
                  </button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
      {/* add to cart area end */}
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
            </NavLink>
            {/* addToCart icon start */}
            <button onClick={() => {
              setShowCart(!showCart);
            }}
              className="btn btn-ghost btn-circle">
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
            {/* addToCart icon end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
