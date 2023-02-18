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
  faTelegram,
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
      <div className="flex items-center">
        <div className="basis-1/2 text-center  contactdiv">
          <div className="fontcontainer">
            <h4>Contact us</h4>
            <h1>Get In Touch With Us </h1>
            <p>
              {" "}
              This is a ecommerce platform in which we the developers are the
              owners and we are the developers here too .Please make sure to
              subscribe our newsletter to follow us and up to date with the
              latest news{" "}
            </p>
            {/* here I will put the flex design  */}
            <div className="fonts">
              <div className="flex font items-center">
                <FontAwesomeIcon
                  style={{ height: "40px" }}
                  icon={faLocationArrow}
                  className="mr-10"
                />
                <div>
                  {" "}
                  <h3>Our location</h3> <p>NEw york , America</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex font items-center">
                <FontAwesomeIcon
                  style={{ height: "40px" }}
                  icon={faPhone}
                  className="mr-10"
                />
                <div>
                  {" "}
                  <h3>Our Phone:</h3> <p>012444423333</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex font items-center">
                <FontAwesomeIcon
                  style={{ height: "40px" }}
                  icon={faTelegram}
                  className="mr-10"
                />
                <div>
                  {" "}
                  <h3>Our Email</h3> <p>xbox@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-1/2 text-center contactdiv">
          <div className="formcontainer">
            <form>
              <input type="text" placeholder="your name"></input>
              <input type="email" placeholder="your email address"></input>

              <input type="number" placeholder="your number"></input>
              <textarea row="6" placeholder="your message"></textarea>
              <button>Submit query</button>
            </form>
          </div>
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
