import React from 'react'

import Navbar from './../../Components/Navbar/navbar';
import HowWorks from "./../../Components/HowWorks/Howworks";
import HomeTabsLeft from "./../../Components/HomeTabs/LeftTab/tabLeft";
import HomeTabsRight from "./../../Components/HomeTabs/RightTab/tabRight";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import img1 from "./../../assets/images icons/1x/user (1).png";
import img2 from "./../../assets/images icons/1x/Vector Smart Object.png";

import vectorimg from "./../../assets/images icons/1x/Header.png";



import ContactForm, { ConnenctButton, HrLine, Spacer, Therapist, Input,UpperDiv } from "./home.style";

const vactorImg = {
  backgroundImage: `url(${vectorimg})`,
  backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
};

export default function home() {
  return (
    <div>
      <Navbar />

      <Row style={vactorImg}>
        <Col
          xs={{ order: "last" }}
          sm={{ order: "last" }}
          lg={{ order: "first" }}
          md={5}
        >
          <Row>
            <Col md={3} lg={3}>
              &nbsp;
            </Col>
            <Col md={9} lg={9}>
              <ContactForm>
                <p>Connect to Therapist</p>
                <br />
                <ConnenctButton>
                  {" "}
                  <img src={img1} /> In Person
                </ConnenctButton>
                <ConnenctButton online>
                  {" "}
                  <img src={img1} /> Online
                </ConnenctButton>
                <Spacer />
                <HrLine />
                <Spacer />
                <UpperDiv>
                  <Therapist>Therapist Specialist</Therapist>
                </UpperDiv>
                <Input type="text" placeholder="Depression, Truma" />
                <UpperDiv>
                  <Therapist>Therapist</Therapist>
                </UpperDiv>
                <Input type="text" placeholder="John Doe" />
                <ConnenctButton search> Search</ConnenctButton>
              </ContactForm>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: "first" }}
          sm={{ order: "first" }}
          lg={{ order: "last" }}
          md={7}
        >
          <UpperDiv>
            <img className="mobimgset" src={img2} />
          </UpperDiv>
        </Col>
      </Row>

      <HowWorks />
      <Row>
        <Col lg={8} md={8} sm={12}>
          <HomeTabsLeft />
        </Col>
        <Col lg={4} md={4} sm={12}>
          <HomeTabsRight />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
