import styled from 'styled-components';

const scrollbarWidth = window.innerWidth - document.body.clientWidth;

export const Container = styled.header` 
  display: flex; 
  height: 80px;
  flex-flow: row nowrap; 
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 320px) { 
    width: 320px; 
    padding-left: 14px; 
    padding-right: 14px;
  }

  @media screen and (min-width: 320px) { 
    width: 95vw;
    padding-left: 14px; 
    padding-right: 14px;
  }

  @media screen and (min-width: 375px) { 
    padding-left: 16px; 
    padding-right: 16px; 
  }

  @media screen and (min-width: 1440px) { 
    width: 1440px; 
    padding-left: 80px; 
    padding-right: 80px;
  }
`;

export const BackGroundContainer = styled.span`
  height: 80px; 
  width: calc(100vw - ${scrollbarWidth}px); 
  position: absolute; 
  top: 0; 
  left: 0;
  z-index: -1;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.056);
  background-color: ${props => props.theme.primaryColor};
`; 

