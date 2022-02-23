import styled from "styled-components";


const NavbarWrapper = styled.div`
  /* color: red; */

  .logimg{
    display: 'flex';
    align-item: 'center';
    @media(max-width: 550px){
      height: 39px !important;
    }
  } 
  
  .logoheader {
    display: flex;
    align-items: center;
    color: #3a3a3a;
    @media (max-width: 550px) {
      position: relative;
      right: 49px;
    }
  }
  .logoname {
    font-family: GilroyRegular;
    font-size: 24px;
    position: relative;
    top: 10px;
  }

  .bghead {
    background: #fbffff !important;
  }

  .signupbtn {
    border: 2px #73d0be solid;
    border-radius: 38px;
    padding: 5px 27px !important;
  }

  .loginbtn {
    border: 2px #73d0be solid;
    border-radius: 38px;
    padding: 5px 35px !important;
    background: #73d0be !important;
    color: white !important;
  }
`;


export const Logotext = styled.p`
  font-family: GilroyBold;

`;

export const Smlogotext = styled.p`
  position: relative;
  left: 3px;
  top: 11px;
  font-size: 12px;
`;


export default NavbarWrapper;
