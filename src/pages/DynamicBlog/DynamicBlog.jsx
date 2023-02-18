import {
  faFacebook,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import PopularPostContainer from "../../Components/Home/MostPopularBlog/PopularPostContainer";
import auth from "../../firebase.config";
// import CommentSection from "./CommentSection";

const DynamicBlog = () => {
  const [user] = useAuthState(auth);
  const [textareaValue, setTextareaValue] = useState("");
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    console.log("click", user.displayName, user.email, textareaValue);
    const comment = {
      name: user.displayName,
      email: user.email,
      comment: textareaValue,
    };
    axios
      .post(`http://localhost:5088/comment`, comment)
      .then((res) => {
        console.log(res.data);
        if (res?.data?.insertedId) {
          toast("comment success");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("something is wrong");
      });
  };
  return (
    <div className="grid grid-cols-3 font-rubik ">
      {/* this is the first div to take the contents here   */}
      <div className="col-span-2 p-16 ">
        {/* the details of the blog post  */}
        <h1 className="text-4xl font-black my-12">
          Ultra-Thin Laptop Rentals and Rivalry
        </h1>
        <img
          src="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2020/12/blog-2.jpg"
          className="my-5"
          alt=""
        />

        <h1 className="text-xl">
          <strong>
            It has become an industry standard to put “mobile first” when
            designing for the mobile web and while this is, in general, a good
            thing it has also left to a neglect of the tablet platform in mobile
            design
          </strong>{" "}
        </h1>

        <p className="text-xl font-light my-10">
          As laptops have got slimmer, lighter and more compact, sacrifices have
          been made, the most obvious being the removal of many of the ports we
          used to rely on. Gone are the days when you could find a SDXD card
          slot on your MacBook Pro, with no Ethernet port you are reliant on a
          strong WiFi signal, and if you are still using old USB peripherals
          then you are going to have to kiss them goodbye if you want a new Mac
          laptop.
        </p>

        <p>
          <strong className="text-2xl my-10 font-black">
            WHAT PORTS DOES THE MACBOOK HAVE?
          </strong>
        </p>

        <p className="text-xl font-normal my-10">
          When Apple unveiled its{" "}
          <span className="text-rose-700 font-black">ultra-slim MacBook </span>{" "}
          back in 2015, the new design caused quite a stir. Aside from being
          gorgeous and tiny, it also came with a hefty price tag and only one
          connection port the relatively new USB-C. USB Type C offers up to
          5Gbps transfers in addition to supporting charging. Like the MacBook
          Air, the 13in MacBook Pro has two Thunderbolt 3/USB-C ports. The 15in
          MacBook Pro offers four Thunderbolt 3/USB-C ports.
        </p>

        <p>
          <span className="text-9xl">"</span>{" "}
          <span className="text-3xl font-black mb-12">
            {" "}
            All you need is a laptop or a PC and an Internet connection and you
            can pretty much do almost anything and create almost any type of
            company.
          </span>
        </p>
        <p className="text-xl my-14">
          There is one other{" "}
          <span className="text-rose-700 font-bold">
            difference between the USB-C port
          </span>{" "}
          on the different MacBooks. The other benefit of the USB-C port is that
          it doesn't matter what orientation you plug your cable in. If you feel
          that every time you plug in a USB-A plug it is the wrong way round,
          this will become a distant memory. That sounds like an awful lot of
          Thunderbolt 3/USB-C ports, to recap:
        </p>

        <ul className="list-disc p-6 text-xl font-bold">
          <li> MacBook: One USB-C port</li>
          <li>MacBook Air: Two Thunderbolt 3/USB-C ports</li>
          <li>MacBook Air: Two Thunderbolt 3/USB-h ports</li>
          <li>Laptop Air: Two Thunderbolt 3/USB-C ports</li>
        </ul>

        {/* now the table component
         */}
        <br />
        <br />

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th> Description</th>
                <th>Mackbook</th>
                <th>Mackbook pro</th>
                <th>Mackbook</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Dusplay</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>

              <tr>
                <th>core</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>

              <tr>
                <th>Memory</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
              <tr>
                <th>camera</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* div for socail media icons  */}
        <div className="flex  font-bold text-2xl items-center mx-10 my-10">
          <span className="mt-2">Share on :</span>
          <div className="flex items-center mt-5">
            <button className="flex p-1 ml-3  mr-2 hover:bg-gray-300 justify-between bg-indigo-400 text-white">
              <FontAwesomeIcon
                style={{
                  width: "20px",
                  height: " 20px",
                  color: "rgb(89 0 231)",
                }}
                icon={faTwitch}
                className="mx-3"
              />{" "}
              <span className="text-xs">Twitch</span>
            </button>

            <button className="flex p-1 bg-sky-600 text-white  mr-2 hover:bg-gray-300 justify-between bg-red-400">
              <FontAwesomeIcon
                style={{
                  width: "20px",
                  height: " 20px",
                  color: "rgb(7 198 229)",
                }}
                icon={faTwitter}
                className="mx-3"
              />{" "}
              <span className="text-xs">Twitter</span>
            </button>

            <button className="flex p-1 bg-blue-300  text-white  mr-2 justify-between hover:bg-gray-400">
              <FontAwesomeIcon
                style={{
                  width: "20px",
                  height: " 20px",
                  color: "rgb(30 127 211)",
                }}
                icon={faFacebook}
                className="mx-3"
              />{" "}
              <span className="text-xs">Facebook</span>
            </button>
            <button className="flex p-1 hover:bg-grey-400  mr-2  justify-between bg-red-300 text-white">
              <FontAwesomeIcon
                style={{ width: "20px", height: " 20px", color: "#ed3a04" }}
                icon={faYoutube}
                className="mx-3"
              />{" "}
              <span className="text-xs">Youtube</span>
            </button>
          </div>
        </div>

        {/* div for the buttons here
         */}

        <div className="flex  items-center content-center">
          <span className="mx-5 font-bold text-2xl mt-2">Tagged on :</span>
          <div className="flex items-center mt-5">
            <button className="border-2 hover:border-red-400 border-gray-700 p-2 ml-2">
              Awesome
            </button>
            <button className="border-2  hover:border-red-400  border-gray-700 p-2 ml-2">
              Photography
            </button>
            <button className="border-2  hover:border-red-400   border-gray-700 p-2 ml-2">
              Awesome
            </button>
            <button className="border-2  hover:border-red-400  border-gray-700 p-2 ml-2">
              Mackbook
            </button>
            <button className="border-2  hover:border-red-400  border-gray-700 p-2 ml-2">
              Awesome
            </button>
          </div>
        </div>

        {/* the admin power div  */}

        <div className="flex justify-between p-10 bg-zinc-100 my-10">
          <div className="avatar online">
            <div className="w-24 rounded-full">
              <img
                src="https://i.ibb.co/47k6szf/photo-2023-01-20-10-35-14.jpg"
                alt="mahlil"
              />
            </div>
          </div>

          <div className="ml-10 mt-2">
            <h1 className="text-xl font-bold">
              JOHN <span className="text-rose-700 font-ui">Administrator</span>
            </h1>
            <p className="mt-4 font-light font-sans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              viverra euismod odio, gravida pellentesque urna varius vitae. Sed
              dui lorem adipiscing in adipiscing.
            </p>
          </div>
        </div>

        <PopularPostContainer></PopularPostContainer>
        <div style={{ marginTop: "-100px", marginLeft: "22~px" }}>
          <h1>Leave Commment here </h1>

          <form
            onSubmit={handleCommentSubmit}
            className="grid grid-rows-4 gap-4"
          >
            {/* first line of the grid section will contain two input field  */}
            <div className="flex justify-between">
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-zinc-500 block pl-2 text-sm font-serif  text-zinc-400">
                  Name
                </span>
                <input
                  type="text"
                  className="border radius-sm  h-20  basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                  name="name"
                  style={{ width: "320px" }}
                  value={user?.displayName}
                  required
                  readOnly
                />
              </label>

              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2    text-zinc-400">
                  Email
                </span>
                <input
                  type="email"
                  style={{ width: "320px" }}
                  className="border radius-sm basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                  name="email"
                  value={user?.email}
                  readOnly
                  required
                />
              </label>
            </div>

            <label className="block row-span-2">
              {/* <span className="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2   text-zinc-400">
                Name
              </span> */}
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                className="border radius-sm basis-1/2 h-32  mx-1 my-2 border-zinc-400 w-full"
              ></textarea>
            </label>
            <button
              type="submit"
              className="outline outline-2  m-1 border-zinc-400"
              style={{ width: "180px", height: "40px" }}
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      {/* and this is the second div which will contain all the things that are in the rigth side  */}
      <div className="p-12">
        {/* the first section here  */}

        <div className="p-12 border border-gray-300">
          <h1 className="text-2xl font-black mb-5">CATEGORIES</h1>
          <ul className="list-disc pl-5 font-mono font-bold">
            <li>
              {" "}
              <button className="hover:text-rose-600"> User </button>
            </li>
            <li>
              {" "}
              <button className="hover:text-rose-600"> Mobile </button>
            </li>
            <li>
              {" "}
              <button className="hover:text-rose-600"> Laptop </button>
            </li>
            <li>
              {" "}
              <button className="hover:text-rose-600"> Tablet </button>
            </li>
            <li>
              {" "}
              <button className="hover:text-rose-600"> Headphone </button>
            </li>
            <li>
              {" "}
              <button className="hover:text-rose-600"> Monitor </button>
            </li>
          </ul>
        </div>
        {/* the second section */}

        <div>
          <PopularPostContainer></PopularPostContainer>
        </div>

        {/* lets get social div
         */}

        <div className="border border-gray-400 p-5 my-10">
          <div>
            <h1 className="text-xl font-black mb-4">Lets Get Social </h1>
            <p className="mb-5">
              We are a team of dedicated professionals delivering high quality
              WordPress themes and plugins.
            </p>
            <div className="flex items-center mt-5">
              <FontAwesomeIcon
                style={{
                  width: "40px",
                  height: " 40px",
                  color: "rgb(89 0 231)",
                }}
                icon={faTwitch}
                className="mx-3 "
              />
              <FontAwesomeIcon
                style={{
                  width: "40px",
                  height: " 40px",
                  color: "rgb(7 198 229)",
                }}
                icon={faTwitter}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{
                  width: "40px",
                  height: " 40px",
                  color: "rgb(30 127 211)",
                }}
                icon={faFacebook}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "#ed3a04" }}
                icon={faYoutube}
                className="mx-3"
              />
            </div>
          </div>
        </div>

        {/* get in touch email  */}

        <div
          style={{
            background:
              "url(https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/bg-mailchimp-320x211.jpg)",
          }}
          className="flex flex-col text-white p-10"
        >
          <h1 className="font-black text-2xl text-center mb-4">NEWSLETTER</h1>
          <h1 className="mb-5 text-center font-mono">
            Get in touch with us give your email to us
          </h1>

          <input
            type="email"
            required
            className="border-2 h-10   rounded-lg border-rounded w-3/4 ml-7 text-center hover:bg-grey-200"
            placeholder="Your email"
          />
          <button className="border-2 hover:bg-rose-600 h-10 rounded-lg ml-6 mt-8 border-rose-700 w-3/4 rounded-lg">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DynamicBlog;
