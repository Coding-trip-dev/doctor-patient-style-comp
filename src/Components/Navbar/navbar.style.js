import styled from "styled-components";


const NavbarWrapper = styled.div`
  /* color: red; */

  .logoheader {
    display: flex;
    align-items: center;
    color: #3a3a3a;
  }
  .logoname {
    font-family: GilroyRegular;
    font-size: 34.35px;
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


export default NavbarWrapper;
