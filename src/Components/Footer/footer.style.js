import styled, { css } from "styled-components";



export const Footer = styled.div`
display: flex;
flex-direction: column;
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

export const FooterTop = styled.div`
  background-image: url(${(props) => props.footertopImg});

  height: 80px;
`;
export const FooterBot = styled.div`
  height: 150px;
`;
export const FooterMain = styled.div`
 
`;


 export const DoctorQuote = styled.div`
   display: flex;
   flex-direction: column;
   height: 100%;
   align-items: center;
 `;
 export const Head = styled.p`
   font-size: 26px;
   font-family: "Quicksand", sans-serif;
   color: #121212;
   text-align: initial;
   padding: 10px 50px;
   @media (max-width: 550px) {
     padding: 20px;
   }
   ${(props) =>
     props.normal &&
     css`
       font-size: 18px ;
     `};
 `;

 export const Para = styled.p`
   color: #828485;
   font-size: 18px;
   font-family: "Quicksand", sans-serif;
   text-align: initial;
   padding: 0px 20px;
   margin-bottom: 0.5rem;
   @media (max-width: 550px) {
     padding: 20px;
   }
 `;

 export const ContactWrap = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-evenly;
 `;

  export const Wrap = styled.div`
  
  `;
 export const ButtonMain = styled.div`
  display: flex;
  flex-direction: row;
  `;
   export const Footerbutton = styled.button`
     background: none;
     border: none;
   `;


export default Footer;
