import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SinglePost from "./SinglePost";

const posts = [
  {
    title: "Ultra-Thin Laptop Rentals and Rivalry",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis.",
    image:
      "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-2.jpg",
    link: "#",
    author: "John",
    date: "MAY 6, 2021",
    comments: 4,
  },
  {
    title: "How to Tag Faces in the Android Gallery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis.",
    image:
      "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-1.jpg",
    link: "#",
    author: "Jane",
    date: "MAY 23, 2021",
    comments: 2,
  },
  {
    title: "The New Sony Solo Cinematic Dream",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis.",
    image:
      "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-4.jpg",
    link: "#",
    author: "Smith",
    date: "MAY 6, 2021",
    comments: 0,
  },
  {
    title: "The Best Smartphone: Top Expert Picks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan faucibus ipsum id iaculis.",
    image:
      "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/03/blog-8.jpg",
    link: "#",
    author: "John",
    date: "MAY 6, 2021",
    comments: 4,
  },
];

function PopularPostContainer() {
  // to set how many slides should be shown
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className="p-[20px] max-w-[1100px] m-auto">
      <div className="top flex justify-between text-[26px] mb-5 text-center leading-[0] mb-7">
        <h3 className="font-bold">Most Popular Blog Posts</h3>
        <NavLink to="#" className="text-[16px] underline-offset-1 underline hover:text-red-500">VIEW MORE</NavLink>
      </div>
      <Swiper
        slidesPerView={width <= 760 ? 1 : 3}
        spaceBetween={20}
        className=""
      >
        {posts.map((post) => {
          return (
            <SwiperSlide>
              <SinglePost post={post} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default PopularPostContainer;
