import React from 'react';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile border-t-2">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-accent">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-accent text-white">
                    {/* <!-- Sidebar content here --> */}
                    <li className='border-b-[1px]'>Dashboard Home</li>
                    <li className='border-b-[1px]'>Order</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;