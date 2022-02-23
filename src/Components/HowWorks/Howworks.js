import React from "react";

import work2 from "./../../assets/images icons/1x/work1.png";
import work1 from "./../../assets/images icons/1x/work2.png";
import work3 from "./../../assets/images icons/1x/work3.png";

// import React from "react";
// import ReactDOM from "react-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./index.css";

import HowWorks, { Spacer, Heading } from "./Howworks.style";

const iconsty = {
  height: "25px",
  position: "relative",
  top: "23px",
};

function HowItWorks() {
  var settings = {
    dots: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <HowWorks className="container">
      {/* <Spacer /> */}
      <Heading>Online Therapist</Heading>
      <Heading fnt>How It Works?</Heading>
       <hr className="hrline" />
      <Heading>Get Connected with therapist in 3 steps</Heading>

      <Slider
        {...settings}
        style={{ backgroundColor: "#F9FEFE" }}
        className="h-auto mx-auto flex flex-row responsive"
      >
        <div>
          <div
            style={{ backgroundColor: "#73D0BE", width: "90%" }}
            className="h-auto mx-auto mx-auto mt-10  pb-5 rounded-md	"
          >
            <div
              style={{
                borderRadius: "50%",
                width: "85px",
                backgroundColor: "#E3F6F2",
                height: "85px",
                top: "-30px",
                position: "relative",
                border: "7px solid rgb(249 254 254 / 59%)",
              }}
              className="mx-auto"
            >
              <img className="mx-auto" src={work1} alt="" style={iconsty} />
            </div>
            <h4
              className="mx-auto"
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Choose a Psychologist
            </h4>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
              }}
            >
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundColor: "#FC6459", width: "90%" }}
            className="h-auto mx-auto mx-auto mt-10  pb-5 rounded-md	"
          >
            <div
              style={{
                borderRadius: "50%",
                width: "85px",
                backgroundColor: "#FC6459",
                height: "85px",
                top: "-30px",
                position: "relative",
                border: "7px solid rgb(249 254 254 / 59%)",
              }}
              className="mx-auto"
            >
              <img className="mx-auto" src={work2} style={iconsty} alt="" />
            </div>
            <h4
              className="mx-auto"
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
                marginTop: "10px",
              }}
            >
              Complete Your Payment
            </h4>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
              }}
            >
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundColor: "#73D0BE", width: "90%" }}
            className="h-auto mx-auto mx-auto mt-10  pb-5 rounded-md	"
          >
            <div
              style={{
                borderRadius: "50%",
                width: "85px",
                backgroundColor: "#E3F6F2",
                height: "85px",
                top: "-30px",
                position: "relative",
                border: "7px solid rgb(249 254 254 / 59%)",
              }}
              className="mx-auto"
            >
              <img className="mx-auto" src={work3} style={iconsty} alt="" />
            </div>
            <h4
              className="mx-auto"
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
              }}
            >
              Connect to Psychologist
            </h4>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
                marginTop: "10px",
              }}
            >
              It is a long established fact that a reader will be distractedF{" "}
            </p>
          </div>
        </div>
        <div>
          <div
            style={{ backgroundColor: "#FC6459" }}
            className="h-auto mx-auto mx-auto mt-10  pb-5 rounded-md	"
          >
            <div
              style={{
                borderRadius: "50%",
                width: "85px",
                backgroundColor: "#FC6459",
                height: "85px",
                position: "relative",
                top: "-30px",

                border: "7px solid rgb(249 254 254 / 59%)",
              }}
              className="mx-auto"
            >
              <img className="mx-auto" src={work2} style={iconsty} alt="" />
            </div>
            <h4
              className="mx-auto"
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
                marginTop: "10px",
              }}
            >
              Complete Your Payment
            </h4>
            <p
              style={{
                color: "#FFFFFF",
                fontSize: "bold",
                textAlign: "center",
                padding: "0px 20px",
              }}
            >
              It is a long established fact that a reader will be distracted{" "}
            </p>
          </div>
        </div>
      </Slider>
    </HowWorks>
  );
}

export default HowItWorks;
