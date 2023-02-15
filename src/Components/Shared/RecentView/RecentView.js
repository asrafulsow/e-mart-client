import React from 'react';
import recentProduct from "../../../imagess/mobile-product1.png"
import Ratting from '../../Home/Ratting/Ratting';

const RecentView = () => {
    return (
        <div className="grid grid-cols-3 gap-4 border-b-2 mb-4">
            <div className="col-span-1">
                {/* recent view product image */}
                <img src={recentProduct} alt="Recent product" />
            </div>
            {/* Recent view product description */}
            <div className="row-span-3 w-[200px] space-y-3">
                <h3 className="text-sm">Simple Mobile 4G LTE Prepaid Smartphone</h3>
                <Ratting />
                <p>$599</p>
            </div>
        </div>
    );
};

export default RecentView;