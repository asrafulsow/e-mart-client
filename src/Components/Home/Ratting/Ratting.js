import React from 'react';

const Ratting = ({ rat }) => {
    return (
        <>
            <div className="rating rating-xs">
                <input type="radio" name="rating-5" value={1} className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" value={1} className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" value={1} className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" value={1} className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            </div>
        </>
    );
};

export default Ratting;