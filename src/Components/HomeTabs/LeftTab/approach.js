import React from "react";

import Approach, {
  Spacer,
  Textsize,
  CallPerson,
  StatusCell,
  EmptyCell,
  VideoCell,
  Rating,
  FeeCharges,
  DurationCharge,
  ConsultantWrapper,
  Duration,
  Fee,
  Smtext,
  Lgtext,
  Moretext,
  SpecialTreatmentTags,
  Tag,
  Connections,
  Talk,
  Profile,
  Quest,
  Switch,
  Inperson,
  Online,
  Experience,
  ExpTag,
  CallPersonWrap,
} from "./approach.style";

import logo from "./../../../assets/images icons/1x/Image 12.png";
import ratingimg from "./../../../assets/images icons/1x/rating.png";
import zoomimg from "./../../../assets/images icons/1x/zoom.png";
import person from "./../../../assets/images icons/1x/user (1).png";

import Edu from "./../../../assets/images icons/1x/Education.png";
import Loc from "./../../../assets/images icons/1x/address.png";
import Love from "./../../../assets/images icons/1x/Love.png";


import { FiHeart } from "react-icons/fi";

import Calender from "./../../AvailbilityCalender/calender";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

// import person from "./../../../assets/images icons/1x/Ellipse 2.png";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import onlineimg from "./../../../assets/images icons/1x/online.png";

import { AiOutlineYoutube } from "react-icons/ai";

export default function approach() {



  const DoctorMainWraper = {
        borderRight: '1px #E7F8F5 solid', 
         backgroundColor: 'white',
  boxShadow: '0px -1px 17px #e3e3e3',
  borderRadius: '12px',
  padding: '5px 5px 5px 5px'
  }

  const border = {
    borderLeft: '1px #E7F8F5 solid',
  }
 

  return (
    <Row style={DoctorMainWraper}>
      <Col md={9} lg={9} sm={12}>
        <Approach>
          <Row>
            <Col lg={4} md={4} sm={12}>
              {/* <p>Lorem</p> */}
              <Row>
                <Col>
                  <Experience onlyshowmob>
                    <ExpTag>
                      <img src={Edu} /> 5 Years
                    </ExpTag>
                    <ExpTag>
                      <img src={Loc} /> Location
                    </ExpTag>
                    <ExpTag love>
                      <FiHeart size={20} />{" "}
                    </ExpTag>
                  </Experience>
                </Col>
              </Row>
              <ConsultantWrapper>
                <CallPersonWrap>
                  <CallPerson>
                    <StatusCell>
                      <img className="onlineimg" src={onlineimg} />
                    </StatusCell>
                    <EmptyCell>
                      <Spacer />
                    </EmptyCell>
                    <VideoCell>
                      {" "}
                      <AiOutlineYoutube className="yticon" size={40} />{" "}
                    </VideoCell>
                  </CallPerson>
                </CallPersonWrap>

                <FeeCharges>
                  <Textsize consultExperties onlyshowmob mobstyle>
                    Accredited Gestalt Psychotherapist, M.Psych(Gest)
                  </Textsize>
                  <Textsize consultName onlyshowmob mobstylehead>
                    {" "}
                    Humera Livingston1
                  </Textsize>

                  <Rating>
                    <img src={ratingimg} />
                    <Textsize>(4.9)</Textsize>
                  </Rating>

                  <Switch>
                    <Inperson>
                      <img src={person} /> In Person
                    </Inperson>
                    <Online>
                      <img src={zoomimg} /> Online
                    </Online>
                  </Switch>

                  <DurationCharge className="spectabs">
                    <Duration>
                      <Smtext>Duration</Smtext>
                      <Lgtext>50 mins</Lgtext>
                    </Duration>
                    <Fee>
                      <Smtext>Fee</Smtext>
                      <Lgtext>$140</Lgtext>
                    </Fee>
                  </DurationCharge>
                </FeeCharges>
              </ConsultantWrapper>
            </Col>

            <Col lg={8} md={8} sm={12}>
              <Row>
                <Col md={6} lg={6} sm={12} className="setpad1">
                  <Textsize consultName onlyWeb>
                    {" "}
                    Humera Livingston
                  </Textsize>
                </Col>
                <Col md={6} lg={6} sm={12} className="setpad2">
                  {/* Experties will only show for Wed view here, For mobile view its on other div */}
                  <Experience>
                    <ExpTag>
                      <img src={Edu} /> 5 Years
                    </ExpTag>
                    <ExpTag>
                      <img src={Loc} /> Location
                    </ExpTag>
                    <ExpTag love>
                      <FiHeart size={20} />{" "}
                    </ExpTag>
                  </Experience>
                </Col>
              </Row>

              <Textsize consultExperties onlyWeb>
                Accredited Gestalt Psychotherapist, M.Psych(Gest)
              </Textsize>
              <Textsize consultDesc>
                labore et Lorem ipsum dolor sit amet, consectetur adipiscing
                elit,do sed do eiusmod tempor incididunt ut labore et do eiusmod
                tempor do eiusmod tempor incididunt ut labore et incididunt u…{" "}
                <Moretext>Read More</Moretext>
              </Textsize>

              <SpecialTreatmentTags>
                <Tag>Anxiety</Tag>
                <Tag>CBT: Cognitive behavioral therapy</Tag>
                <Tag>Panicattacks</Tag>
                <Tag>Psychotherapy</Tag>
                <Tag>Systemic therapy</Tag>
              </SpecialTreatmentTags>

              <Connections>
                <Talk> Talk Now</Talk>
                <Quest>Ask Question</Quest>
                <Profile>Check Profile</Profile>
              </Connections>
            </Col>
          </Row>
        </Approach>
      </Col>

      <Col md={3} lg={3} sm={12} style={border}>
        <Calender />
      </Col>
    </Row>
  );
}
