import React from 'react';

const Ratting = () => {
    return (
        <>
            <div className="rating rating-xs">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" defaultChecked />
            </div>
        </>
    );
};

export default Ratting;