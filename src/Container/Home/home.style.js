import styled, { css } from "styled-components";


export const ContactForm = styled.form`
  font-family: GilroyRegular;
  font-size: 25.65px;
  background: white;
  /* box-shadow: 2px 3px 8px #c1c0c0; */
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  padding: 10px;
  border: 1px #c4f7ee solid;
  border-radius: 10px;

  @media (max-width: 550px) {
    border-radius: 10px;
    width: 80%;
    margin: 0px auto;
    border: none !important;
  }
`;


export const ConnenctButton = styled.button`
  background-color: white;
  border: 2px #73d0be solid;
  width: 75%;
  margin: 0px auto;
  border-radius: 29px;
  height: 48px;
  display: Block;
  margin-bottom: 10px;
  color: #121212;
  font-size: 22px;
  &:hover {
    background-color: #73d0be;
    color: white;
  }
  ${(props) =>
    props.online &&
    css`
      background-color: #73d0be;
      color: white;
      &:hover {
        background-color: white;
        color: #73d0be;
      }
    `};
  ${(props) =>
    props.search &&
    css`
      background-color: #73d0be;
      color: white;
      margin-top: 15px;
      width: 85%;
      &:hover {
        background-color: white;
        color: #73d0be;
      }
    `};
`;
export const HrLine = styled.hr`
  background-color: #38b39b;
  height: 2px !important;
  width: 83%;
  margin: 0px auto;
`;


export const Spacer = styled.div`
  height: 20px;
  width: 100%;
  ${(props) =>
    props.lesheight &&
    css`
      height: 10px;
    `};
`;



export const Therapist = styled.label`
  font-family: GilroyRegular;
  font-size: 17.1px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 85%;
  margin: 0px auto;
  border: 1px #a5a5a5 solid;
  border-radius: 29px;
  display: block;
  ::placeholder {
    color: #cbcbcb;
    /* padding-left: 10px; */
    position: relative;
    left: 10px;
  }
`;

export const UpperDiv = styled.div`
  text-align: initial;
  width: 76%;
  margin: 0px auto;


`;


export const Content = styled.div`
  background-image: url(${(props) => props.img});
`;


 export const Switch = styled.div`
   font-family: "Quicksand", sans-serif;
   width: 100%;
   border: 1px #73d0be solid;
   width: 90%;
   margin: 0px auto;
   border-radius: 25px;
   padding: 2px 1px;
   height: 52px;
   @media (max-width: 550px) {
     width: 100%;
   }
 `;

 export const Inperson = styled.div`
   width: 50%;
   float: left;
   font-size: 20px;
   position: relative;
   top: 7px;
   color: #121212;
 `;

 export const Online = styled.div`
   width: 50%;
   float: left;
   background: #73d0be;
   color: white;
   border-radius: 27px;
   padding: 8px 1px;
   font-size: 20px;
   position: relative;
   top: 0px;
   right: 2px;
 `;


 export const DoctorQuote = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: baseline;
   justify-content: center;

   @media (min-width: 500px) {
     padding: 135px 50px 0px 140px;
   }
 `;
 export const Head = styled.p`
   font-size: 26px;
   font-family: "Quicksand", sans-serif;
   color: #121212;
   text-align: initial;
   @media (max-width: 550px) {
     padding: 20px;
   }
 `;

  export const Para = styled.p`
    color: #828485;
    font-size: 18px;
    font-family: "Quicksand", sans-serif;
    text-align: initial;
    @media (max-width: 550px) {
      padding: 20px;
    }
  `;

export default ContactForm;
