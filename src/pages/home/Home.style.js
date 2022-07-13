import styled from "styled-components";
import ResponsiveContainer from "../../components/design/ResponsiveContainer";

export const Container = styled.section`
  ${ResponsiveContainer}
  display: flex; 
  flex-flow: column nowrap;
  gap: 40px;
  
  @media screen and (min-width: 768px) { 
      flex-flow: row nowrap; 
      justify-content: space-between;
  }
`; 