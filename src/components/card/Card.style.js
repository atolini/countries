import styled from 'styled-components' 

const Container = styled.article`
    display: flex; 
    flex-flow: column nowrap; 
    width: 264px; 
    height: 336px; 
    background-color: ${props => props.theme.primaryColor};
    
    box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294384);
    border-radius: 5px;

    img {
        width: 100%; 
        height: 100%;
        overflow: hidden;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
`;

export default Container