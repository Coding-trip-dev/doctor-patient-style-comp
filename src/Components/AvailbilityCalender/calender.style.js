import styled, { css } from "styled-components";


const Calender = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 30px;


 
`;

export const Day = styled.div`
  font-family: "Quicksand", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;

  width: 30% !important;
  float: left !important;

  ${(props) =>
    props.mrlft &&
    css`
      margin-left: 10px ;
    `};
`;



export const Dayname = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 17px;
  color: #929292;
  margin-bottom: 20px;

  
`;

export const Daytime = styled.div`
  font-family: "Quicksand", sans-serif;

  padding: 5px 7px;
  color: #c2c3d0;
  margin: 5px auto;
  width: 75%;
  
  ${(props) =>
    props.yes &&
    css`
      background: #edf7f6;
      border-radius: 14px;
      padding: 5px 7px;
      color: #58b6b3;
    `};
`;


export const CalenderWrapper = styled.div`
  font-family: "Quicksand", sans-serif;
  height: 100%;

  .slidheight {
    height: 75%;
    @media (max-width: 550px) {
      height: 60%;
    }
  }

  .slick-prev:before {
    /* background: #ddf4ef !important; */
    padding: 10px !important;
    border-radius: 50% !important;
    color: #cbcaca !important;
    position: relative !important;
    top: -106px !important;
    left: 12px !important;
  }

  .slick-next:before {
    /* background: #ddf4ef !important; */
    padding: 10px !important;
    border-radius: 50% !important;
    color: #cbcaca !important;
    position: relative !important;
    top: -106px !important;
    left: -37px !important;
  }

  @media (max-width: 550px) {
    height: 480px;
  }
`;

export const GetAppointment = styled.div`
  font-family: "Quicksand", sans-serif;
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: relative;
  /* top: -10px; */
  /* font-size:  */
`;


export const ShowBtn = styled.button`
  font-family: "Quicksand", sans-serif;
  width: 30%;
  margin: 0px auto;
  color: #1cbab5;
  background: #e6f5f4;
  border: none;
  border-radius: 15px;
  padding: 5px 5px;
  font-size: 12px;
`;

export const AppBtn = styled.button`
  font-family: "Quicksand", sans-serif;
  width: 70%;
  margin: 0px auto;
  color: white;
  background: #1cbab5;
  border: none;
  border-radius: 15px;
  padding: 5px 5px;
  font-size: 17.55px;
  font-weight: bold;
`;

//  AppBtn;
export default Calender;
