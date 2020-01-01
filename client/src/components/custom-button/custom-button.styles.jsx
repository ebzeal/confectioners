import styled, { css } from "styled-components";

const buttonStyles = css`
  background: #F27A54;
  border-radius: 10px;
  color: black;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = props => {
  return props.isGoogleSignIn
    ? googleSignInStyles
    : props.inverted
    ? invertedButtonStyles
    : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 20px;
  padding: 0 35px 0 35px;
  font-size: 13px;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
