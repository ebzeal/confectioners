import styled from 'styled-components';


 const DisclaimerContainer = styled.div`
  font-size:small;
  color: ${props => props.color};
  text-align: center;
  margin: ${props => props.topMargin} 5% ${props => props.bottomMargin};
`;

export default DisclaimerContainer;