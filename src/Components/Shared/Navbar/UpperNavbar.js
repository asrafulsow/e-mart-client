import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import { RxCross1 } from "react-icons/rx";
import cartImg from "../../../imagess/home-product7.png";
import { coolGray } from "tailwindcss/colors";

const UpperNavbar = () => {
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
    for(let i=0; i<amounts.length; i++){
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

  const removeFromCart=(id)=>{
    const remainingCart=cart.filter(c=>c.id !=id)
    const remainingAmounts=amounts.filter(c=>c.id !=id)
    setCart(remainingCart)
    setAmounts(remainingAmounts)

  }
  const removeAllItems=()=>{
    setCart([])
    setAmounts([]) 

  }
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
                  <button className="uppercase py-3 px-10  border-2 border-black bg-transparent font-bold text-xs text-black">
                    View cart
                  </button>
                  <button className="uppercase py-[14px] px-11  border-non3 bg-[#F50000] font-bold text-xs text-white">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}

      {/* upper navbar  */}

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
                          className="cls-1"
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
              <button
                className="btn btn-ghost btn-circle"
                onClick={() => {
                  setShowCart(!showCart);
                }}
              >
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
