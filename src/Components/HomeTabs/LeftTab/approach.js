import React from "react";

import Approach, { Spacer, Textsize, CallPerson, StatusCell, EmptyCell, VideoCell,Rating } from "./approach.style";

import logo from "./../../../assets/images icons/1x/Image 12.png";
import ratingimg from "./../../../assets/images icons/1x/rating.png";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import person from "./../../../assets/images icons/1x/Ellipse 2.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import onlineimg from "./../../../assets/images icons/1x/online.png";

import { AiOutlineYoutube } from "react-icons/ai";

export default function approach() {
  return (
    <Approach>
      <h2>Location 1</h2>
      <Row>
        <Col lg={4} md={4} sm={12} style={{ backgroundColor: "red" }}>
          {/* <img src={person} /> */}
          <CallPerson>
            <StatusCell>
              <img className="onlineimg" src={onlineimg} />
            </StatusCell>
            <EmptyCell>
              <Spacer />
            </EmptyCell>
            <VideoCell> <AiOutlineYoutube className="yticon" size={40}/> </VideoCell>
          </CallPerson>
         
         <Rating>
          <img src={ratingimg} />
         <Textsize>(4.9)</Textsize>
         </Rating>
        </Col>

        <Col lg={8} md={8} sm={12} style={{ backgroundColor: "pink" }}>
          advcfd
        </Col>
      </Row>
    </Approach>
  );
}
