import React from 'react'

import Navbar from './../../Components/Navbar/navbar';
import HowWorks from "./../../Components/HowWorks/Howworks";
import DoctorSection from "./../../Components/HomeTabs/LeftTab/tabLeft";
import HomeTabsRight from "./../../Components/HomeTabs/RightTab/tabRight";

import zoomimg from "./../../assets/images icons/1x/zoom.png";
import person from "./../../assets/images icons/1x/user (1).png";

import doctorimg from "./../../assets/images icons/1x/Online Doctor-pana.png";


import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


import img1 from "./../../assets/images icons/1x/user (1).png";
import img2 from "./../../assets/images icons/1x/Vector Smart Object.png";

import vectorimg from "./../../assets/images icons/1x/Header.png";

import FAQ from "./../../Components/FAQs/faq";
import Footer from "./../../Components/Footer/footer";


import ContactForm, {
  ConnenctButton,
  MobNavbar,
  Titles,
  HrLine,
  Spacer,
  Therapist,
  Input,
  UpperDiv,
  Switch,
  Inperson,
  Online,
  DoctorQuote,
  Head,
  Para,
} from "./home.style";

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
                <Titles>Connect to Therapist</Titles>
                <br />
                <Switch>
                  <Inperson>
                    <img src={person} /> In Person
                  </Inperson>
                  <Online>
                    <img src={zoomimg} /> Online
                  </Online>
                </Switch>

                <Spacer />
                <HrLine />
                <Spacer lesheight />
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

      <MobNavbar>
        <Navbar />
      </MobNavbar>

      <Row>
        <Col lg={12} md={12} sm={12}>
          <DoctorSection />
        </Col>
      </Row>

      <br />
      <br />
      <Row>
        <Col lg={6} md={6} sm={12}>
          <DoctorQuote>
            <Head>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Head>
            <Para>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dui
              mi, dapibus et ipsum vitae, sollicitudin finibus urna. Quisque
              quis neque semper, finibus sapien vel, placerat arcu.{" "}
            </Para>
          </DoctorQuote>
        </Col>
        <Col lg={6} md={6} sm={12} style={{ textAlign: "initial" }}>
          <img src={doctorimg} className="mobImg" />
        </Col>
      </Row>
      <br />
      <br />
      <FAQ />

      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
