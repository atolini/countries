import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

export const darkTheme = {
  name: 'darkTheme',
  fontPrimary: "'Nunito Sans', sans-serif",
  fontColor: '#FFF',
  bgBodyColor: '#202C36',
  primaryColor: '#2B3844',
  segundaryColor: '#2B3844',
  skeletonColor: '#FFF', 
  hoverColor: '#767f9a', 
}

export const lightTheme = {
  name: 'lightTheme',
  fontPrimary: "'Nunito Sans', sans-serif",
  fontColor: '#111517',
  bgBodyColor: '#FAFAFA',
  primaryColor: '#fff',
  segundaryColor: '#EAEAEA',
  skeletonColor: '#d7d8db', 
  hoverColor: '#d7d8db', 
}

function Theme({ children }) {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
