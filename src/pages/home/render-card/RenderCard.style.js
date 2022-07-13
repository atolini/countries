import ResponsiveContainer from '../../../components/design/ResponsiveContainer';
import styled from 'styled-components'

export const Container = styled.main`
  ${ResponsiveContainer}
  
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  grid-auto-flow: row;
  justify-items: center;
  gap: 74px;
  height: auto;
`;

export const ButtonsContainer = styled.div`
  ${ResponsiveContainer}
  
  display: flex; 
  flex-flow: row nowrap; 
  justify-content: center;
  align-items: center;
`; 

