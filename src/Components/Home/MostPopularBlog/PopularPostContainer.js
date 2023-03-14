import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SinglePost from "./SinglePost";



function PopularPostContainer() {
  // to set how many slides should be shown
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://emart-xcpi.onrender.com/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto pt-10">
      <div className="top flex justify-between items-center text-[26px] mb-10 text-center leading-[0]">
        <h3 className="font-bold text-xl pb-2">Most Popular Blog Posts</h3>
        <NavLink
          to="#"
          className="text-[16px] underline-offset-1 underline hover:text-red-500"
        >
          VIEW MORE
        </NavLink>
      </div>
      <Swiper
        slidesPerView={width <= 760 ? 1 : 3}
        spaceBetween={20}
        className=""
      >
        {posts?.map((post) => {
          return (
            <SwiperSlide key={post._id}>

              <SinglePost post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PopularPostContainer;
