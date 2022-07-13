import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 200px;
  height: 48px; 
`;

export const DropUp = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 12px; 
  color: ${(props) => props.theme.fontColor};
  border-radius: 5px;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 14px 24px 14px 24px;

  :hover { 
    background-color: ${(props) => props.theme.hoverColor};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
      font-size: 14px;
  }
`;

export const DropBottom = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  font-family: ${(props) => props.theme.fontPrimary};
  font-size: 12px; 
  color: ${(props) => props.theme.fontColor};
  border-radius: 5px;
  
  position: absolute;
  top: 52px;
  display: flex;
  width: 200px;
  flex-flow: column nowrap;
  padding: 4px 0 4px 0; 

  p {
    padding: 4px 24px 4px 24px;

    :hover {
      background-color: ${(props) => props.theme.hoverColor};
      cursor: pointer;
    }
  }

  @media screen and (min-width: 768px) {
      font-size: 14px;
  }
`;
