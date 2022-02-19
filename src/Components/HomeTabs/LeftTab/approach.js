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
} from "./approach.style";

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
      <Row>
        <Col lg={4} md={4} sm={12}>

          <ConsultantWrapper>
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

            <FeeCharges>
              <Rating>
                <img src={ratingimg} />
                <Textsize>(4.9)</Textsize>
              </Rating>

              <DurationCharge className="spectabs">
                <Tabs>
                  <TabList>
                    {/* <LogoText>Lorem</LogoText> */}
                    <Tab>In Person</Tab>
                    <Tab>Online</Tab>
                  </TabList>

                  {/* this is fee section for Personally */}
                  <TabPanel
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  >
                    <Duration>
                      <Smtext>Duration</Smtext>
                      <Lgtext>50 mins</Lgtext>
                    </Duration>
                    <Fee>
                      <Smtext>Fee</Smtext>
                      <Lgtext>$140</Lgtext>
                    </Fee>
                  </TabPanel>

                  {/* this is fee section for Onlie */}

                  <TabPanel
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginBottom: "10px",
                    }}
                  >
                    <Duration>
                      <Smtext>Duration</Smtext>
                      <Lgtext>70 mins</Lgtext>
                    </Duration>
                    <Fee>
                      <Smtext>Fee</Smtext>
                      <Lgtext>$740</Lgtext>
                    </Fee>
                  </TabPanel>
                </Tabs>
              </DurationCharge>
            </FeeCharges>
          </ConsultantWrapper>
        </Col>

        <Col lg={8} md={8} sm={12} >

          <Row>
              <Col lg={7} md={7}>&nbsp;</Col>
              <Col lg={5} md={5}>&nbsp;</Col>

          </Row> 
          <Textsize consultName> Humera Livingston</Textsize>
          <Textsize consultExperties> Accredited Gestalt Psychotherapist, M.Psych(Gest)</Textsize>
          <Textsize consultDesc> labore et Lorem ipsum dolor sit amet, consectetur adipiscing elit,do 
                sed do eiusmod tempor incididunt ut labore et do eiusmod tempor 
                do eiusmod tempor incididunt ut labore et incididunt u… <Moretext>Read More</Moretext></Textsize>

         <SpecialTreatmentTags>

           <Tag>Anxiety</Tag>
           <Tag>CBT: Cognitive behavioral therapy</Tag>
           <Tag>Panicattacks</Tag>
           <Tag>Psychotherapy</Tag>
           <Tag>Systemic therapy</Tag>

         



         </SpecialTreatmentTags>


         <Connections>
             <Talk>Talk Now</Talk>
             <Quest>Ask Question</Quest>
             <Profile>Check Profile</Profile>
         </Connections>

        </Col>
      </Row>
    </Approach>
  );
}
