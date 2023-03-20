import React, { useState } from 'react';
import productImg from "../../imagess/home-product5.png"
import { AiTwotoneDelete } from "react-icons/ai";
const SingleCartProduct = () => {
    // counter start
    const [quantity, setQuantity] = useState(0);
    const handleIncrease = () => {
        setQuantity(quantity + 1)
    }
    const handleDecrease = () => {
        setQuantity(quantity - 1)
    }
    // counter end
    return (
        <div>
            {/* single cart product start */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full md:h-[200px]">
                    {/* table headding start */}
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {/* table headding end */}
                    {/* table body start */}
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    {/* product image */}
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={productImg} alt="product area" />
                                        </div>
                                    </div>
                                    {/* product name */}
                                    <div>
                                        <div className="font-bold">Capable countertop microwave oven</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {/* product price start */}
                                <div>
                                    <h3>$140.00</h3>
                                </div>
                                {/* product price end */}
                            </td>
                            {/* product quantity area start */}
                            <td>
                                <div className="flex items-center justify-center border border-gray-300 rounded-lg overflow-hidden">
                                    <button onClick={handleDecrease} className="px-4 py-2 border-r border-gray-300">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        className="w-12 text-center py-2 border-r border-l border-gray-300"
                                        min="1"
                                    />
                                    <button onClick={handleIncrease} className="px-4 py-2 border-l border-gray-300">
                                        +
                                    </button>
                                </div>
                            </td>
                            {/* product quantity area start */}
                            {/* subTotal area start */}
                            <th>
                                <div>
                                    <h3>$140.00</h3>
                                </div>
                            </th>
                            {/* subTotal area end */}
                            {/* delete area */}
                            <th>
                                <div className='cursor-pointer'><AiTwotoneDelete className='text-red-600' /></div>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div>
            {/* single cart product end */}
        </div>
    );
};

export default SingleCartProduct;