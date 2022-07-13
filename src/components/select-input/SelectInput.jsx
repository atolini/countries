/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef, useEffect } from "react";
import { Container, DropUp, DropBottom } from "./SelectInput.style";
import { useTheme } from "styled-components";
import useOnClickOutside from "use-onclickoutside";

function SelectInput({ func }) {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prevState) => !prevState);
  useOnClickOutside(ref, () => {
    if (isOpen) return toggle();
  });

  const changeValue = (newValue) => {
    if (newValue !== value) {
      setValue(newValue);
      setIsOpen(false);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    func(value);
  }, [value]);

  return (
    <Container ref={ref}>
      <DropUp onClick={toggle}>
        <p>{value === "" ? "Filter by Region" : value}</p>
        <img
          src={
            theme.name === "lightTheme"
              ? "icons/dropdown-light.svg"
              : "icons/dropdown-dark.svg"
          }
        />
      </DropUp>

      <DropBottom style={{ visibility: isOpen ? "visible" : "hidden" }}>
        <p onClick={() => changeValue("")}>All Countries</p>
        <p onClick={() => changeValue("Africa")}>Africa</p>
        <p onClick={() => changeValue("America")}>America</p>
        <p onClick={() => changeValue("Asia")}>Asia</p>
        <p onClick={() => changeValue("Europe")}>Europe</p>
        <p onClick={() => changeValue("Oceania")}>Oceania</p>
      </DropBottom>
    </Container>
  );
}

export default SelectInput;
