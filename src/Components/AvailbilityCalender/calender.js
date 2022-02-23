import React from 'react'

import Calender, { Dayname, Daytime, Day, GetAppointment,CalenderWrapper,ShowBtn, AppBtn } from "./calender.style";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function calender() {
      var settings = {
        dots: false,
        autoplay: true,
        slidesToShow: 1,
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
    <CalenderWrapper>
      <Slider {...settings}  className="slidheight"> 
        <Calender>
          <Day mrlft>
            <Dayname>Monday</Dayname>
            <Daytime yes>08:45</Daytime>
            <Daytime yes>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime yes>11:45</Daytime>
          </Day>
          <Day>
            <Dayname>Tuesday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime yes>09:30</Daytime>
            <Daytime>10:15</Daytime>
            <Daytime yes>11:45</Daytime>
          </Day>

          <Day>
            <Dayname>Wednesday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>
        </Calender>

        <Calender>
          <Day>
            <Dayname>Thursday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>

          <Day>
            <Dayname yes>Friday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>

          <Day>
            <Dayname>Satuarday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime yes>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime yes>11:45</Daytime>
          </Day>
        </Calender>

        <Calender>
          <Day>
            <Dayname>Sunday</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>

          <Day>
            <Dayname>Today</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>

          <Day>
            <Dayname>Tmrw</Dayname>
            <Daytime>08:45</Daytime>
            <Daytime>09:30</Daytime>
            <Daytime yes>10:15</Daytime>
            <Daytime>11:45</Daytime>
          </Day>
        </Calender>
      </Slider>

      <GetAppointment>
        <ShowBtn>Show more</ShowBtn>
        <AppBtn>Get Appointement</AppBtn>
      </GetAppointment>
    </CalenderWrapper>
  );
}
