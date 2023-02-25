import React from 'react';

const CheckoutProduct = () => {
    return (
        <div className='bg-[#eff6fd]'>
            <div className="billing-details-area w-[90%] mx-auto pt-10 pb-10">
                <div class="grid grid-cols-4 grid-flow-col gap-4">
                    {/* Checkout form start */}
                    <div className='col-span-3'>
                        <form action="#" method="POST">
                            <div className="overflow-hidden shadow sm:rounded-md">
                                <div className="bg-white px-4 py-5 sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                required
                                                autoComplete="given-name"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                required
                                                autoComplete="family-name"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                name="email-address"
                                                id="email-address"
                                                required
                                                autoComplete="email"
                                                className="mt-1 block w-full rounded-md p-3 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                Country
                                            </label>
                                            <select
                                                id="country"
                                                name="country"
                                                required
                                                autoComplete="country-name"
                                                className="mt-1 block w-full p-3 rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>

                                        <div className="col-span-6">
                                            <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                                                Street address
                                            </label>
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                required
                                                autoComplete="street-address"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                City
                                            </label>
                                            <input
                                                type="text"
                                                name="city"
                                                id="city"
                                                required
                                                autoComplete="address-level2"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="region" className="block text-sm font-medium text-gray-700">
                                                State / Province
                                            </label>
                                            <input
                                                type="text"
                                                name="region"
                                                id="region"
                                                required
                                                autoComplete="address-level1"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                ZIP / Postal code
                                            </label>
                                            <input
                                                type="text"
                                                name="postal-code"
                                                id="postal-code"
                                                required
                                                autoComplete="postal-code"
                                                className="mt-1 block w-full p-3 border rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* confirm order area */}
                    <div className='col-span-1 bg-white p-5'>
                        <div className="place-order-area  space-y-7">
                            <h3 className='text-2xl font-bold mt-7'>Your Order</h3>
                            <div className="shipping text-lg flex justify-between items-center">
                                <h3>Shipping</h3>
                                <h3>Free Shipping</h3>
                            </div>
                            <div className="shipping flex justify-between items-center text-xl font-bold">
                                <h3>Total</h3>
                                <h3>$140.00</h3>
                            </div>
                            <button className='btn bg-primary-all w-full text-lg text-white italic border rounded-full'>PROCCED ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutProduct;