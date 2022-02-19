import styled, { css } from "styled-components";

import imgper from "./../../../assets/images icons/1x/person.png";



const Approach = styled.div`
  font-family: GilroyRegular;
  /* background-color: gray;
  height: 500px; */

  .onlineimg {
    position: relative;
    top: 40px;
    left: 60px;
  }

  .yticon {
    height: 50px;
    width: 50px;
    background: #73d0be;
    border-radius: 50%;
    padding: 9px;
    color: white;
    position: relative;
    top: -32px;
    left: 47px;
  }
`;

export const Spacer = styled.div`
  height: 100px;
  width: 100%;
`;
export const LogoText = styled.p`
  font-family: "Quicksand", sans-serif;
  font-size: 30px;

  display: initial;
`;

export const CallPerson = styled.div`
  display: flex;
  flex-direction: column;
  height: 225px;
  background-image: url(${imgper});
  background-repeat: no-repeat;
  background-position: center;
  background-size: inherit;
`;

export const StatusCell = styled.div`
 
  height: 10%;
`;
export const EmptyCell = styled.div`
  height: 70%;
`;
export const VideoCell = styled.div`
  height: 20%;
`;
;

 export const Textsize = styled.p`
   font-family: "Quicksand", sans-serif;
   font-size: 14px;
   position: relative;
   top: -4px;
   left: 10px;
 `;




 export const Rating = styled.p`
   /* flex-direction: row; */
   align-items: baseline;
   justify-content: center;
   display: flex;
   flex-direction: row;
 `;


export default Approach;
