import styled from 'styled-components';
import ResponsiveContainer from '../design/ResponsiveContainer'; 

export const Container = styled.section`
  ${ResponsiveContainer}; 

  display: flex; 
  flex-flow: column nowrap;
  gap: 24px;
  border: 1px solid black;

  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor};
`;

export const Article = styled.article`
  display: flex; 
  flex-flow: column nowrap; 
  gap: 2px;

  h1 {
      font-size: 22px; 
      margin-bottom: 8px;
    }
`;

export const SubContainer = styled.article`
  display: flex; 
  flex-flow: column nowrap;
  gap: 16px;
  
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`; 

export const Title = styled.h3`
  font-weight: 600;
  font-size: 14px; 
  line-height: 32px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px; 
  line-height: 32px;
`;

export const Paragraph = styled.p`
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;
`;

export const ChipsContainer = styled.div`
  display: flex; 
  flex-flow: row wrap; 
  gap: 10px;
`; 

