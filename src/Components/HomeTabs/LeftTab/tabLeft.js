import React from 'react'

import LeftComp, { Spacer, LogoText, Cornor } from "./tabLeft.style";

import logo from "./../../../assets/images icons/1x/Image 12.png";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import ApproachSection from "./approach";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function tabLeft() {
  return (
    <>
      <Spacer />
      <LeftComp>
        <Tabs>
          <Container>
            <Row>
              <Col md={1} lg={1} sm={12}>
                <Cornor>
                  <img src={logo} />
                </Cornor>
              </Col>
              <Col md={11} lg={11} sm={12}>
                <TabList>
                  <LogoText>Lorem</LogoText>
                  <Tab>Location</Tab>
                  <Tab>Type</Tab>
                  <Tab>Approach</Tab>
                  <Tab>Language</Tab>
                  <Tab>Gender</Tab>
                  <Tab>Price</Tab>
                  <Tab>Reset</Tab>
                  <Tab>Type</Tab>
                  <Tab>Open Map</Tab>
                </TabList>

                <TabPanel>
                  <ApproachSection />
                  <ApproachSection />
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
                  <h2>Reset..</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Type</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Open map</h2>
                </TabPanel>
              </Col>
            </Row>
          </Container>
        </Tabs>
      </LeftComp>
    </>
  );
}
