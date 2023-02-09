import React from "react";
import Box from "./Box";
import Box2 from "./Box2";
import Team from "./Team";

const About = () => {
  const teams = [
    {
      _id: 1,
      name: "Tom crus",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "CEO & FOUNDER",
    },
    {
      _id: 2,
      name: "Chris",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "LEAD UX DESIGNER",
    },
    {
      _id: 3,
      name: "Albardon",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "FRONTEND DEVELOPER",
    },
    {
      _id: 4,
      name: "Sanem",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "BACKEND DEVELOPER",
    },
    {
      _id: 5,
      name: "Rafiq",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "JAVASCRIPT DEVELOPER",
    },
    {
      _id: 6,
      name: "Anik",
      image:
        "https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2019/06/team-6.jpg",
      designation: "JAVASCRIPT DEVELOPER",
    },
  ];
  return (
    <div>
      <div className="container mx-auto my-10">
        <Box
          title="SEARCH, SELECT, BUY ONLINE"
          img="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img1-about-us.jpg"
        />
        <Box2
          title="FAST DELIVERY WORLDWIDE"
          img="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img2-about-us.jpg"
        />
        <Box
          title="SHOP OFFLINE OURS OUTLET STORES"
          img="https://gostore-be87.kxcdn.com/gostore/wp-content/uploads/2021/04/img3-about-us.jpg"
        />
      </div>
      <div className="team container mx-auto">
        <h2 className="text-3xl text-black text-center font-bold py-5">
          OUR CORE THEME
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-5">
          {teams.map((team) => (
            <Team team={team} key={team._id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
