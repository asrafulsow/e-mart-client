Skip to content
Search or jump to…
Pull requests
Issues
Codespaces
Marketplace
Explore
 
@asrafulsow 
asrafulsow
/
e-mart-client
Public
Fork your own copy of asrafulsow/e-mart-client
Code
Issues
Pull requests
2
Actions
Projects
Wiki
Security
Insights
Settings
e-mart-client/src/pages/contact/Contact.js /
@mahlilmahee
mahlilmahee edited and styled the contact page
Latest commit 8a6cca2 4 days ago
 History
 1 contributor
225 lines (214 sloc)  7.16 KB

import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDailymotion,
  faDashcube,
  faFacebook,
  faOctopusDeploy,
  faTwitch,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBox,
  faKhanda,
  faLocation,
  faLocationArrow,
  faPhone,
  faStopwatch,
  faVoicemail,
} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const myIcon = new L.Icon({
    iconUrl: "https://i.ibb.co/qFNPPmq/16968-200.png",
    iconRetinaUrl: "https://i.ibb.co/qFNPPmq/16968-200.png",
    popupAnchor: "[51.505,-0.09]",
    iconSize: "[100px,44]",
  });

  return (
    <div>
      {/* here I will make two flex section  */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "2rem",
          fontFamily: "ui-serif",
          fontWeight: "600",
        }}
      >
        <h1 style={{ marginLeft: "110px", marginTop: "20px" }}>CONTACT US</h1>
        <h1 style={{ marginRight: "380px", marginTop: "20px" }}>
          GET IN TOUCH US
        </h1>
      </div>
      <div
        className="flex items-center justify-center"
        style={{
          paddingLeft: "100px",
          paddingRight: "100px",
          fontFamily: "sans-serif",
          fontWeight: "bold",
        }}
      >
        <div className="flex-1">
          <div className="grid grid-rows-5 gap-2">
            {/* here will be the each div containing the section here    */}

            <div className="flex items-center">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 50px", color: "rgb(112 81 71)" }}
                icon={faPhone}
                className="mx-3"
              />
              <div>
                <h2>Call us</h2>
                <h3>0190334424</h3>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 50px", color: "#879fa7" }}
                icon={faBox}
                className="mx-3"
              />
              <div>
                <h2>Email Address</h2>
                <h3>kxr@gmail.com</h3>
              </div>
            </div>
            <div className="flex  items-center">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 50px", color: "#111a26f2" }}
                icon={faLocationArrow}
                className="mx-3"
              />
              <div>
                <h2>Store Location</h2>
                <h3>Florida, Neywork</h3>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 50px", color: "rgb(110 52 35)" }}
                icon={faStopwatch}
                className="mx-3"
              />
              <div>
                <h2>Time</h2>
                <h3>Monday-sunday</h3>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(89 0 231)" }}
                icon={faTwitch}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(7 198 229)" }}
                icon={faTwitter}
                className="mx-3"
              />
              <FontAwesomeIcon
                style={{ width: "40px", height: " 40px", color: "rgb(30 127 211)" }}
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
        <div className="flex-1 p-4">
          <form
            action="https://formsubmit.co/mahlilmaheee223@gmail.com"
            method="POST"
            className="grid grid-rows-4 gap-4"
          >
            {/* first line of the grid section will contain two input field  */}
            <div className="flex justify-between">
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block pl-2 text-sm font-serif  text-zinc-400">
                  Name
                </span>
                <input
                  type="text"
               
                  class="border radius-sm  h-20  basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                  name="name"
                  style={{width:'260px'}}
                  required
                />
              </label>
             
                <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2    text-zinc-400">
                  Email
                </span>
                <input
                type="email"
               
                style={{width:'260px'}}
                class="border radius-sm basis-1/2 w-full h-10 mx-1 my-2 border-zinc-400"
                name="email"
                required
              />
              </label>
              
            </div>
       
             <label class="block " style={{width:'100%'}}>
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif  pl-2  text-zinc-400">
                  subject
                </span>
                <input
              type="text"
              name="subject"
          
              class="border radius-sm h-10 basis-1/2 w-full mx-1 my-2 border-zinc-400"
            />
              </label>
          
               <label class="block row-span-2">
                <span class="after:content-['*'] after:ml-0.5 after:text-zinc-500 block  text-sm font-serif pl-2   text-zinc-400">
                  Name
                </span>
                <textarea
            class="border radius-sm basis-1/2 h-20  mx-1 my-2 border-zinc-400 w-full"
             
            ></textarea>
              </label>
            <button
              type="submit"
              className="outline outline-2  m-1 border-zinc-400"
              style={{ width: "180px", height:'40px' }}
            >
              Submit question
            </button>
          </form>
        </div>
      </div>
      <MapContainer
        style={{
          height: "600px",
          backgroundColor: "red",
          marginTop: "80px",
          width: "100%",
          marginBottom: "90px",
        }}
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={myIcon} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Contact;
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
e-mart-client/Contact.js at mahee · asrafulsow/e-mart-client