import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;

  padding: 10px 24px 10px 24px;
  background-color: ${props => props.theme.segundaryColor};

  border: none; 
  border-radius: 100px;

  cursor: not-allowed;

  font-family: ${props => props.theme.fontPrimary};
  color: ${props => props.theme.fontColor};
  font-weight: 600;

  ${props => props.available ? 'cursor: pointer;' : ''}
  ${props => !props.available ? 'filter: opacity(0.7);' : ''}

  :active {
    box-shadow: ${props => (props.theme.name === 'lightTheme') ? '3px 2px 22px 1px rgba(0, 0, 0, 0.24);' : '3px 2px 22px 1px rgba(137, 158, 174, 0.24);'} 
  }
`;

export default Button;