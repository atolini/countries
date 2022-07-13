import styled from 'styled-components' 

const Input = styled.div`
  width: 264px; 
  height: 48px; 

  display: flex; 
  flex-flow: row nowrap; 
  align-items: center;
  gap: 25px;
  padding-left: 32px;

  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryColor};

  @media screen and (min-width: 375px) { 
    width: 325px;
  }

  input { 
    border: none;
    height: 100%;
    width: 100%;
    font-family: ${props => props.theme.fontPrimary};
    font-size: 12px; 
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.primaryColor};
    border-radius: inherit;

    :focus { 
      outline: none;
    }

    ::placeholder { 
      color: ${props=> props.theme.fontColor};
    }

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  img { 
    width: 16px;
    height: 16px;
  }
`; 

export default Input