import React from 'react';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile border-t-2">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#eff6fd]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#eff6fd] text-black space-y-5 font-bold text-lg cursor-pointer">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-3'>Dashboard Home</li>
                    <li className='mb-3'>Order</li>
                    <li className='mb-3'>Transaction</li>
                    <li className='mb-3'>Payment</li>
                    <li className='mb-3'>Cancel Order</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;