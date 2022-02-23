import styled, { css } from "styled-components";

import imgper from "./../../../assets/images icons/1x/person.png";



const Approach = styled.div`
  font-family: GilroyRegular;
  /* background-color: gray;
  height: 500px; */
 
  /* margin-bottom: 20px; */

  .setpad1 {
    padding-top: 30px;
  }

  .setpad2 {
    padding-top: 20px;
  }
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

  @media (max-width: 550px) {
    /* width: 50%; */
  }
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

   ${(props) =>
     props.consultName &&
     css`
       font-size: 26px;
       text-align: initial;
       margin-bottom: unset;
     `};
   ${(props) =>
     props.consultExperties &&
     css`
       font-size: 17px;
       text-align: initial;
     `};

   ${(props) =>
     props.consultDesc &&
     css`
       font-size: 16px;
       font-family: "Quicksand", sans-serif;
       text-align: initial;
       padding: 2px 10px;
       @media (max-width: 550px) {
         margin-top: -51px;
       }
     `};

   ${(props) =>
     props.onlyshowmob &&
     css`
       @media (min-width: 500px) {
         display: none;
       }
     `};

   ${(props) =>
     props.mobstyle &&
     css`
       @media (max-width: 550px) {
         font-size: 10px;
         margin-top: 20px;
       }
     `};

   ${(props) =>
     props.mobstylehead &&
     css`
       @media (max-width: 550px) {
         font-size: 16px;
       }
     `};
   ${(props) =>
     props.onlyWeb &&
     css`
       @media (max-width: 550px) {
         display: none;
       }
     `};
 `;




 export const Rating = styled.div`
   /* flex-direction: row; */
   align-items: baseline;
   justify-content: center;
   display: flex;
   flex-direction: row;
   height: 25px;
 `;

  export const FeeCharges = styled.div`
    /* flex-direction: row; */

    display: flex;
    flex-direction: column;

    @media (max-width: 550px) {
      width: 50%;
    }
  `;



  export const DurationCharge = styled.div`
    /* flex-direction: row; */

    display: flex;
    flex-direction: row;

    .inptxt {
      font-family: "Quicksand", sans-serif;
      font-size: 15px;
    }

    .onlinetxt {
          font-family: "Quicksand", sans-serif;
      font-size: 15px;
    }
  `;


  export const ConsultantWrapper = styled.div`
    /* flex-direction: row; */

    display: flex;
    flex-direction: column;

    @media (max-width: 550px) {
      flex-direction: row;
    }
  `;


  export const Duration = styled.div`
    /* flex-direction: row; */
    border-right: 1px #73d0be solid;
    width: 50%;
  `;

  
  export const Fee = styled.div`
    /* flex-direction: row; */

    width: 50%;
  `;
    
  export const Smtext = styled.p`
    /* flex-direction: row; */
    /* flex-direction: row; */
    font-family: "Quicksand", sans-serif;
    font-size: 11px;
    color: #73d0be;
    margin-bottom: unset !important;
  `;
    
  export const Lgtext = styled.p`
    font-family: "Quicksand", sans-serif;
    font-size: 19px;
    color: #121212;
    margin-bottom: unset !important;
    @media (max-width: 550px) {
      font-size: 15px;
    }
  `;


  export const Moretext = styled.span`
    font-family: "Quicksand", sans-serif;
    font-size: 13px;
    background-color: #e6f5f4;
    color: #5d638c;
    padding: 2px 5px;
    border-radius: 10px;
  `;



export const SpecialTreatmentTags = styled.div`
  font-family: "Quicksand", sans-serif;
  text-align: initial;

`;

export const Tag = styled.button`
  font-family: "Quicksand", sans-serif;
  background: #cceee8;
  color: #52a091;
  padding: 3px 7px;
  border-radius: 14px;
  margin-right: 8px;
  display: inline;
  cursor: default;
  border: none;
  margin-bottom: 10px;
`;

export const Connections = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px ;
`;

export const Talk = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 19px;
  background-color: #48d90b;
  color: white;
  padding: 1px 30px;
  border-radius: 17px;
  font-weight: bold;
  margin-right: 5px;
  @media (max-width: 550px) {
    font-size: 14px;
    padding: 5px 16px;
  }
`;
export const Profile = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 19px;
  background-color: #fa7268;
  color: white;
  padding: 1px 30px;
  border-radius: 17px;
  margin-right: 5px;
  @media (max-width: 550px) {
    font-size: 14px;
    padding: 5px 16px;
  }
`;
export const Quest = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 19px;
  background-color: #73d0be;
  color: white;
  padding: 1px 30px;
  margin-right: 5px;
  border-radius: 17px;
  @media (max-width: 550px) {
    font-size: 14px;
    padding: 5px 16px;
  }
`;

 export const Switch = styled.div`
   font-family: "Quicksand", sans-serif;
   width: 100%;
   border: 1px #73d0be solid;
   width: 90%;
   margin: 0px auto;
   border-radius: 20px;
   padding: 2px 1px;
   @media (max-width: 550px) {
     width: 100%;
   }
 `;

  export const Inperson = styled.div`
    width: 50%;
    float: left;
    position: relative;
    top: 3px;

    @media (max-width: 550px) {
      font-size: 12px;
      top: 5px;
    }
  `;

    export const Online = styled.div`
      width: 50%;
      float: left;
      background: #73d0be;
      color: white;
      border-radius: 14px;
      padding: 3px 1px;
    `;


    export const Experience = styled.div`
      width: 100%;
      display: flex;
      flex-direction: row;
      @media (max-width: 550px) {
        display: none;
      }

      ${(props) =>
        props.onlyshowmob &&
        css`
          @media (max-width: 550px) {
            display: flex;
            padding: 15px 5px;
          }
          @media (min-width: 500px) {
            display: none;
          }
        `};
    `;
    
    export const ExpTag = styled.div`
      width: 40%;
      font-family: "Quicksand", sans-serif;
      font-size: 14px;
      background: aliceblue;
      border-radius: 12px;
      margin-right: 5px;
      font-weight: bold;
      color: #3a3a3a;
      ${(props) =>
        props.love &&
        css`
          width: 20%;
          background: none;
        `};
    `;
  export const CallPersonWrap = styled.div`
    font-family: "Quicksand", sans-serif;
    @media (max-width: 550px) {
      width: 50%;
    }
  `;

export default Approach;
