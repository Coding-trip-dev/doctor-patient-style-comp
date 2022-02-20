import React from 'react'

import LeftComp, { Spacer, LogoText, Cornor,Account , AccountBtn } from "./tabLeft.style";

import logo from "./../../../assets/images icons/1x/Image 12.png";

import Enrumlogo from "./../../../assets/images icons/1x/Enustrek.png";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import ApproachSection from "./approach";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function tabLeft() {

 const settabs = {
       textAlign: 'initial',
    paddingTop: '12px',
 }

  return (
    <>
      <Spacer />
      <LeftComp>
        <Tabs>
          <Row>
            <Col md={12} lg={12} sm={12}>
              <TabList className="tabset">
                <Row>
                  <Col md={3} lg={3} sm={12}>
                    <img src={Enrumlogo} style={{ height: "62px" }} />
                  </Col>
                  <Col md={7} lg={7} sm={12} style={settabs}>
                    <Tab>Location</Tab>
                    <Tab>Type</Tab>
                    <Tab>Approach</Tab>
                    <Tab>Language</Tab>
                    <Tab>Gender</Tab>
                    <Tab>Price</Tab>

                    <Tab>Reset</Tab>
                    <Tab>Open Maps</Tab>
                  </Col>
                  <Col md={2} lg={2} sm={12}>
                    {/* <LogoText>Lorem</LogoText> */}
                    <Account>
                      <AccountBtn>Signup</AccountBtn>
                      <AccountBtn login>Login</AccountBtn>
                    </Account>
                  </Col>
                </Row>
              </TabList>

              <TabPanel>
                <Container>
                  <ApproachSection />
                  <br/>
                  <ApproachSection />
                </Container>
              </TabPanel>
              <TabPanel>
                <h2>Type</h2>
              </TabPanel>
              <TabPanel>
                <h2>Approach</h2>
              </TabPanel>
              <TabPanel>
                <h2>Language...</h2>
              </TabPanel>
              <TabPanel>
                <h2>Gender..</h2>
              </TabPanel>
              <TabPanel>
                <h2>Price....</h2>
              </TabPanel>

              <TabPanel>
                <h2>Type</h2>
              </TabPanel>
            </Col>
          </Row>
        </Tabs>
      </LeftComp>
    </>
  );
}
