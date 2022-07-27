import ResponsiveContainer from '../../../components/design/ResponsiveContainer';
import styled from 'styled-components'

export const Container = styled.main`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-auto-flow: row;
  justify-items: center;
  gap: 74px;
  height: auto;

  @media screen and (max-width: 320px) { 
    width: 320px; 
    padding-left: 14px; 
    padding-right: 14px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 320px) { 
    width: 95vw;
    padding-left: 14px; 
    padding-right: 14px; 
    padding-bottom: 32px;
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

export const ButtonsContainer = styled.div`
  ${ResponsiveContainer}
  
  display: flex; 
  flex-flow: row nowrap; 
  justify-content: center;
  align-items: center;
`; 

