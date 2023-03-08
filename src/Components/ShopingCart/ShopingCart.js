import React from 'react';
import { Link } from 'react-router-dom';
import SingleCartProduct from './SingleCartProduct';

const ShopingCart = () => {
    return (
        <div>
            <div className="view-shoping-cart-area py-10">
                <div className="container w-[90%] mx-auto">
                    {/* top heading start */}
                    <div className="top-heading">
                        <h3 className='font-bold text-4xl pb-10'>Shopping Cart</h3>
                    </div>
                    {/* top heading end */}
                    <div className="cart-item-area">
                        <div class="grid grid-cols-6 gap-4">
                            {/* cart -product area */}
                            <div className='col-span-4'>
                                <SingleCartProduct />
                                <SingleCartProduct />
                            </div>
                            {/* cart checkout product area */}
                            <div className='col-span-2'>
                                <div className="cart-total-area space-y-10 p-[25px] bg-[#dde8f2]">
                                    <div className="cart-total-heading">
                                        <h3 className='font-bold text-2xl'>Cart Total</h3>
                                    </div>
                                    <div className="cart-total-content flex justify-between items-center">
                                        <p className='text-lg'>Subtotal</p>
                                        <p className='text-lg font-bold'>$140.00</p>
                                    </div>
                                    <div className="cart-total-content flex justify-between items-center">
                                        <p className='text-lg font-bold text-blue-600'>Total</p>
                                        <p className='text-lg font-bold text-blue-600'>$140.00</p>
                                    </div>
                                    <div className="cart-button-area">
                                        <Link to="/checkout"><button className='btn bg-primary-all w-full text-lg text-white italic border rounded-full'>PROCEED TO CHECKOUT</button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopingCart;