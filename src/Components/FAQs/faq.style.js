
import styled, { css } from "styled-components";



export const FAQ = styled.div`

 
  /* ${(props) =>
    props.login &&
    css`
      background: #73d0be;
      color: white;
      &:hover {
        background: white;
        color: #3a3a3a;
      }
    `}; */
`;


export const Title = styled.p`
  color: #121212;
  font-size: 46px;
  font-family: GilroyRegular;
  ${(props) =>
    props.news &&
    css`
     margin-top: 200px ;
     
    `};
`;

export const Form = styled.div`
  font-family: GilroyRegular;
  display: flex;
  flex-direction: row;
  height: 52px;
  justify-content: center;
 border: 1px #707070 solid;
    width: 392px;
    margin: 0px auto;
    border-radius: 14px;

@media(max-width: 550px){
  width: 100%;
}


  .textfield {
    width: 250px;
    background: transparent;
  border: none;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    padding-left: 15px;
  }
  .sub {
    background: #73d0be;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 0px 49px;
  }
`;

export default FAQ;
