import React from 'react';
import Ratting from '../Ratting/Ratting';
import user from "../../../imagess/user-1.png"
import user1 from "../../../imagess/user-2.png"
import user2 from "../../../imagess/user-3.png"

const SingleReview = () => {
    return (
        <div className='single-review-area space-y-4 bg-emerald-400 p-4 rounded text-white w-[500px]'>
            <img className="w-[15%] mx-auto border-2 border-green-600 rounded-full" src={user} alt=''></img>
            <span className='font-bold'>Alauddin khilje</span>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ullam!</p>
            <Ratting />
        </div>
    );
};

export default SingleReview;