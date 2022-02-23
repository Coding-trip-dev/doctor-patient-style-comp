

import styled, { css } from "styled-components";

 const HowWorks = styled.div`
   font-family: GilroyRegular;
   background-color: #f9fefe;

   .slick-initialized .slick-slide {
     padding-top: 70px !important;
   }

   .hrline {
     height: 3px;
     background: #26a58c;
     width: 26%;
     margin: 0px auto;
     border: none;
     position: relative;
     top: -5px;
     @media (max-width: 550px) {
       width: 80%;
     }
   }
 `;


export const Spacer = styled.div`
   height: 100px;
   width: 100%;
 `;
export const Heading = styled.p`
margin-top: 10px ;
  font-family: Poppins;
  font-size: 28px;
  color: #414141;
  font-weight: 600;
  ${(props) =>
    props.fnt &&
    css`
      font-size: 24px;
      @media (max-width: 550px) {
        font-size: 12px !important;
      }
    `};

  @media (max-width: 550px) {
    font-size: 14px !important;
  }
`;



export default HowWorks;