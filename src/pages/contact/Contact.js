import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "./contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDailymotion, faDashcube, faFacebook, faIdeal, faOctopusDeploy, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faKhanda } from "@fortawesome/free-solid-svg-icons";
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
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '2rem', fontFamily: 'ui-serif', fontWeight: '600' }}>
        <h1 style={{ marginLeft: '110px', marginTop: '20px' }}>CONTACT US</h1>
        <h1 style={{ marginRight: '380px', marginTop: '20px' }}>GET IN TOUCH US</h1>

      </div>
      <div className="flex items-center justify-center" style={{ paddingLeft: '100px', paddingRight: '100px', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
        <div className="flex-1">
          <div className="grid grid-rows-5 gap-2">
            {/* here will be the each div containing the section here    */}

            <div className="flex items-center">

              <FontAwesomeIcon style={{ width: '60px', height: ' 70px' }} icon={faDailymotion} className="mx-3" />
              <div>
                <h2>Call us</h2>
                <h3>0190334424</h3>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon style={{ width: '60px', height: ' 70px' }} icon={faOctopusDeploy} className="mx-3" />
              <div>
                <h2>Email Address</h2>
                <h3>kxr@gmail.com</h3>
              </div>
            </div>
            <div className="flex  items-center">
              <FontAwesomeIcon style={{ width: '60px', height: ' 70px' }} icon={faKhanda} className="mx-3" />
              <div>
                <h2>Store Location</h2>
                <h3>Florida, Neywork</h3>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon style={{ width: '60px', height: ' 70px' }} icon={faDashcube} className="mx-3" />
              <div>
                <h2>Time</h2>
                <h3>Monday-sunday</h3>
              </div>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon style={{ width: '50px', height: ' 70px' }} icon={faTwitch} className="mx-3" />
              <FontAwesomeIcon style={{ width: '50px', height: ' 70px' }} icon={faTwitter} className="mx-3" />
              <FontAwesomeIcon style={{ width: '50px', height: ' 70px' }} icon={faFacebook} className="mx-3" />
              <FontAwesomeIcon style={{ width: '50px', height: ' 70px' }} icon={faYoutube} className="mx-3" />

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
            <div className="flex ">
              <input
                type="text"
                placeholder="Your name"
                class="border-2 basis-1/2 p-2 mx-2 my-2 border-black "
                name="name"
                required
              />
              <input
                type="email"
                placeholder="your email"
                class="border-2 p-2 basis-1/2 mx-2 my-2 border-black"
                name="email"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="border-2 border-black p-2 m-2"
            />
            <textarea
              className="border-2 p-2 m-2  row-span-2 border-black "

              placeholder="Type your message here "
            ></textarea>
            <button type="submit" className="outline outline-2 p-2 m-2" style={{ width: '200px' }}>Send</button>
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
