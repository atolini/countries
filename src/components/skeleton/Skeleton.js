import styled, { keyframes } from 'styled-components'; 

const brightnessKeyframe = keyframes`
  0% {
    filter: opacity(0); 
  }
  50% {
    filter: opacity(1); 
  }
  100% { 
    filter: opacity(0); 
  }
`;

const Skeleton = styled.div`
  width: 100%; 
  height: 100%; 
  border-radius: inherit;
  background-color: ${props => props.theme.skeletonColor};
  animation: pulse 2.5s infinite;
  animation-name: ${brightnessKeyframe}; 
`;

export default Skeleton; 