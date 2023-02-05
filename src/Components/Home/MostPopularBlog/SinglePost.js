import { BsPerson, BsCalendarWeek } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import {FaLongArrowAltRight} from "react-icons/fa"
import { NavLink } from "react-router-dom";

function SinglePost({ post }) {
  const { title, description, image, link, author, comments, date } = post;
  return (
    <div>
      <NavLink to={link} className="relative overflow-hidden group block">
        <div className="absolute w-full h-full bg-gradient-to-t from-black to-black-50 opacity-90 top-[100%] group-hover:top-0 transition-all ease-in-out duration-300"></div>
        <img src={image} alt="" className="image" />
      </NavLink>
      <div className="flex mt-5 mb-5 font-[12px] leading-none">
        <NavLink to={link} className="leading-none text-[#707070] flex mr-2 hover:text-red-500 hover:underline-offset-1 hover:underline">
          <BsPerson className="mr-1 text-red-500"/>
          {author}
        </NavLink>
        <span className="text-gray-200 mr-2">/</span>
        <div className="leading-none flex mr-2 text-[#707070] ">
          <BsCalendarWeek className="mr-1 text-red-500"/>
          {date}
        </div>
        
        <span className="text-gray-200 mr-2">/</span>
        <div className="leading-none flex mr-2 text-[#707070] ">
          <BiComment className="mr-1 text-red-500"/>
          {comments}
        </div>
      </div>
      <NavLink to={link} className="title text-[20px] leading-[22px] font-bold font-sans mb-4 hover:text-red-500 block">
        {title}
      </NavLink>
      <div className="excerpt text-[13px]">{description.slice()}</div>

      <NavLink to={link} className="inline-block hover:text-red-500 font-bold mt-5 text-[16px] ">READ MORE<FaLongArrowAltRight className="inline-block"/></NavLink>
      
    </div>
  );
}

export default SinglePost;
