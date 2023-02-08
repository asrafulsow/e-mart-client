import React from "react";
import { FaRegWindowClose } from "react-icons/fa";
import {MdDone} from 'react-icons/md'
import {RxValueNone} from 'react-icons/rx'

const data = [
  {
    image:
      "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-34-450x450.jpg",
    title: "Capacity Countertop Microwave Oven",
    price: "$140.00",
    discountPrice: "$99.00",
    stock: true,
  },
  {
    image:
      "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-46-450x450.jpg",
    title: "Capacity Countertop Microwave Oven",
    price: "$140.00",
    discountPrice: "$99.00",
    stock: false,
  },
  {
    image:
      "https://demo.theme-sky.com/gostore/wp-content/uploads/2021/02/electronic-46-450x450.jpg",
    title: "Capacity Countertop Microwave Oven",
    price: "$140.00",
    discountPrice: "$99.00",
    stock: true,
  },
];

const Wishlist = () => {
  return (
    <div className="max-w-[1000px] m-auto mb-5">
    <h2 className="text-[30px] font-bold pl-[1.25rem] mt-4">My wishlist on <span className="text-yellow-500">E-Mart</span> </h2>
    <div className=" max-w-[1000px] m-auto border rounded mt-5 flex md:block flex-wrap">
      {data.map((d) => {
        return (
          <div className="block md:flex flex-row-reverse items-center border px-5 w-[50%] md:w-auto">
            <div className="text-right text-[20px] p-5 flex justify-end">
              <FaRegWindowClose className="text-gray-500 hover:text-red-500 cursor-pointer" />
            </div>
            <div className="rest md:flex flex-row items-center md:justify-between flex-1">
              <div className="flex items-center flex-col md:flex-row">
                <img src={d.image} alt="" className="md:w-[200px] w-[300px]" />
                <div className="text-left w-full">{d.title}</div>
              </div>
              <div className="flex">
                <div className="text-black mr-3 line-through">{d.price}</div>
                <div className="text-red-500">{d.discountPrice}</div>
              </div>
              <div className="flex justify-between">
                <div className="md:hidden">Stock</div>
                {d.stock ? (
                  <div className="text-green-500 font-bold">{<MdDone className="inline-block text-[20px]"/>}In stock</div>
                ) : (
                  <div className="text-red-500 font-bold">{<RxValueNone className="inline-block"/>}Out of stock</div>
                )}
              </div>
              {
                d.stock&&
              <button className="text-center block w-full border border-2 border-black rounded-md hover:bg-black hover:text-white md:w-auto px-2 py-1 transition duration-300 mt-3 mb-3 ">
                Add to cart
              </button>
      }
            </div>
          </div>
        );
      })}
    </div></div>
  );
};

export default Wishlist;
