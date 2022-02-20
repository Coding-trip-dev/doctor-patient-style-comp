import React from 'react';

import Footer, {
  FooterTop,
  FooterBot,
  FooterMain,
  DoctorQuote,
  Head,
  Para,
  ContactWrap,
  Wrap,
  ButtonMain,
  Footerbutton,
} from "./footer.style";

import footertopImg from ".//../../assets/images icons/1x/FooterTop.png";
import footerBotImg from "./../../assets/images icons/1x/FooterBot.png";

import playstore from "./../../assets/images icons/1x/Image 17.png";
import appstore from "./../../assets/images icons/1x/Image 18.png";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import { AiOutlineInstagram } from "react-icons/ai";

export default function footer() {
    
const vactorImg = {
  backgroundImage: `url(${footertopImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
};
const vactorImg2 = {
  backgroundImage: `url(${footerBotImg})`,
  backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'contain'
};
  return (
    <Footer>
      <FooterTop style={vactorImg}>&nbsp;</FooterTop>
      <FooterMain>
        <Row>
          <Col md={4} lg={4} sm={12} >
            <DoctorQuote>
              <Head>Lorem</Head>
              <Para>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dui mi, dapibus et ipsum vitae, sollicitudin finibus urna.
                Quisque quis neque semper, finibus sapien vel, placerat arcu.{" "}
              </Para>
            </DoctorQuote>
          </Col>
          <Col md={2} lg={2} sm={12}>
            <Head normal>Lorem</Head>
            <Para>For Consultants</Para>
            <Para>Find Consultant</Para>
            <Para>FAQ</Para>
            <Para>Question</Para>
          </Col>
          <Col md={2} lg={2} sm={12}>
            <Head normal>Legal</Head>
            <Para>Imprint</Para>
            <Para>Cookies</Para>
            <Para>Security</Para>
            <Para>Privacy policy</Para>
            <Para>Terms of use </Para>
            <Para>Cookies</Para>
          </Col>
          <Col md={4} lg={4} sm={12} >
            <ContactWrap>
              <Wrap>
                <Head normal>Contact Us</Head>
                <Para>info@lorem.com</Para>
                <Head normal>Follow Us</Head>
                <AiOutlineInstagram size={50} />
              </Wrap>
              <Wrap>
                <Head normal>Lorem</Head>
                <Para>lorem@lorem.com</Para>
              </Wrap>
            </ContactWrap>

            <ButtonMain>
              <Footerbutton>
                <img src={playstore} />
              </Footerbutton>
              <Footerbutton>
                <img src={appstore} />
              </Footerbutton>
            </ButtonMain>
          </Col>
        </Row>
      </FooterMain>
      <FooterBot style={vactorImg2}>&nbsp;</FooterBot>
    </Footer>
  );
}
