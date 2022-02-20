import styled, { css } from "styled-components";

const LeftComp = styled.div`
  font-family: GilroyRegular;
  /* background-color: gray;
  height: 500px; */
  .tabset {
    background-color: white;
    box-shadow: 1px 2px 5px #f1f1f1;
    padding: 10px;
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

export const Cornor = styled.div`
  display: flex;
  flex-direction: row;
  
`;

export const Account = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 13px;

  justify-content: space-evenly;
`;
export const AccountBtn = styled.button`
  background: white;
  border: none;
  color: #3a3a3a;
  padding: 7px 19px;
  border-radius: 20px;
  border: 1px #73d0be solid;
  font-weight: bold;
  font-size: 13.78px;

  &:hover {
    background: #73d0be;
    color: white;
  }
  ${(props) =>
    props.login &&
    css`
      background: #73d0be;
      color: white;
      &:hover {
        background: white;
        color: #3a3a3a;
      }
    `};
`;

export default LeftComp;
