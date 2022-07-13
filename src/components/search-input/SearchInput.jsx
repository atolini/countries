/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import Input from './SearchInput.style'
import { useTheme } from "styled-components";
import React, { useRef, useState, useEffect } from 'react';

function SearchInput({ func }) { 
  const theme = useTheme();
  const textInput = useRef(); 
  const [ value, setValue ] = useState('')

  const handleChange = (event) => { 
    setValue(event.target.value)
  }
  
  useEffect(() => {
    func(value);
  }, [value]);
  
  return (
    <Input>
      <img src={(theme.name === 'lightTheme') ? 'icons/search-light.svg' : 'icons/search-dark.svg'} />
      <input 
        ref={textInput} 
        value={value} 
        onChange={handleChange} 
        type="text" 
        placeholder="Search for a country…" 
        maxLength="15"
      />
    </Input>
  ); 
}

export default SearchInput