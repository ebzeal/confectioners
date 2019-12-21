import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 5%;

  @media only screen 
  and (max-device-width: 570px) {
    margin: 20px 5%;
    display: block;
}
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px 0;

  @media only screen 
  and (max-device-width: 570px) {
    width: 100%;
    margin: 0px 25%;
}

`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen 
  and (max-device-width: 570px) {
    width: 100%;
    margin: 0px auto;
    justify-content: center;
}
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 12px;
  color: #3D3E3F;

  :hover {
    color: #000000;
    font-size: 12.5px;
    -webkit-transition: font-size 2s;
  }

  @media only screen 
  and (max-device-width: 414px) {
    padding: 8px;
    font-size: 10px;
}
`;
export const OptionDivider = styled.div`
  padding: 10px 15px;
  font-size: 39px;
  color: rgba(60, 61, 62, 0.7);

  @media only screen 
  and (max-device-width: 414px) {
    padding: 8px;
    font-size: 18px;
}
`;
