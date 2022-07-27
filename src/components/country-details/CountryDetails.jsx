import React, { useState, useEffect } from "react";
import { useQueryClient } from "react-query";
import Chips from "../chips/Chips";
import {
  Container,
  SubContainer,
  Article,
  Title,
  Description,
  Paragraph,
  ChipsContainer,
} from "./CountryDetails.style";

function CountryDetails({ country }) {
  const [nativeName, setNativeName] = useState("");
  const [currencies, setCurrencies] = useState("");
  const [languages, setLanguages] = useState("");
  const [imageUrl, setImageUrl] = useState(""); 
  const queryClient = useQueryClient(); 

  const image = queryClient.getQueryCache(country.id)
  
  // function getInternalUrl(img) {
  //   const internalUrl = URL.createObjectURL(img);
  //   return internalUrl;
  // }

  function getNativeName() {
    let res = Object.entries(country.name.nativeName).flat(Infinity);
    return res[1].common;
  }

  function getCurrencies() {
    let res = Object.entries(country.currencies).flat(Infinity);
    return res[1].name;
  }

  function getLanguages() {
    return Object.values(country.languages).join(", ");
  }

  useEffect(() => {
    setNativeName(getNativeName());
    setCurrencies(getCurrencies());
    setLanguages(getLanguages());
    // setImageUrl(getInternalUrl(image)); 
  }, []);

  return (
    <Container>
      {/* <img src={imageUrl} alt={`${country.name.common} Flag`} /> */}
      <Article>
        <h1>{country.name.common}</h1>
        <Paragraph>
          <Title>Native Name:</Title>
          <Description>{nativeName}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Population:</Title>
          <Description>{country.population}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Region:</Title>
          <Description>{country.region}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Sub Region:</Title>
          <Description>{country.subregion}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Capital:</Title>
          <Description>{country.capital[0]}</Description>
        </Paragraph>
      </Article>

      <Article>
        <Paragraph>
          <Title>Top Level Domain:</Title>
          <Description>{country.tld[0]}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Currencies:</Title>
          <Description>{currencies}</Description>
        </Paragraph>

        <Paragraph>
          <Title>Languages:</Title>
          <Description>{languages}</Description>
        </Paragraph>
      </Article>

      <SubContainer>
        <h2>Border Countries:</h2>
        <ChipsContainer>
          {country.borders.map((element) => (
            <Chips text={element} />
          ))}
        </ChipsContainer>
      </SubContainer>
    </Container>
  );
}

export default CountryDetails;
