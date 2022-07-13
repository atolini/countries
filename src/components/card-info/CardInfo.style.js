import styled from "styled-components";

const Wrapper = styled.span`
  display: flex;
  flex-flow: column nowrap;
  gap: 16px;

  width: 100%;
  height: 176px;
  padding: 24px;

  div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  p {
    font-family: ${props => props.theme.fontPrimary};
    color: ${props => props.theme.fontColor};
    
    font-style: normal;
    font-weight: 400;
    font-size: 12px;    
    line-height: 20px;
    display: inline-block;

    @media screen and (min-width: 375px) {
        font-size: 14px;
    }
  }

  h1 { 
    font-family: ${props => props.theme.fontPrimary}; 
    color: ${props => props.theme.fontColor};

    font-style: normal;
    font-weight: 800;
    font-size: 18px;
    line-height: 26px;
  }
`;

export default Wrapper;
