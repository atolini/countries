import styled from 'styled-components';

const Chips = styled.span`
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 6px 24px 6px 24px; 

  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor};
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  background-color: ${props => props.theme.primaryColor};
  border-radius: 2px; 
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.3);
  width: fit-content;
  height: fit-content;

  @media screen and (min-width: 768px) { 
    font-size: 14px;
  }
`;

export default Chips;