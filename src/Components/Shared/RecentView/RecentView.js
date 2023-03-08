import React from 'react';
import Ratting from '../../Home/Ratting/Ratting';

const RecentView = ({ singleView }) => {
    return (
        <div className="grid grid-cols-3 gap-4 border-b-2 mb-4">
            <div className="col-span-1">
                {/* recent view product image */}
                <img src={singleView.image} alt="Recent product" />
            </div>
            {/* Recent view product description */}
            <div className="row-span-3 w-[200px] space-y-3">
                <h3 className="text-sm">{singleView.name}</h3>
                <Ratting />
                <p>${singleView.price}</p>
            </div>
        </div>
    );
};

export default RecentView;