import React from "react";
import PropTypes from "prop-types";
import Skeleton from "../skeleton/Skeleton";
import { useQuery } from "react-query";
import axios from "axios";
import Error from "../card-error/Error";
import Container from "./Card.style";
import CardInfo from "../card-info/CardInfo";

function fetchFlag(flagUrl) {
  return axios.get(flagUrl, { responseType: "blob" });
}

function getInternalUrl(data) {
  const internalUrl = URL.createObjectURL(data.data);
  return internalUrl;
}

function Card({ flagUrl, commonName, population, region, capital }) {
  let image;

  const { status, data } = useQuery(
    ["flag", flagUrl],
    () => fetchFlag(flagUrl),
    {
      select: (data) => getInternalUrl(data),
      staleTime: Infinity,
    }
  );

  if (status === "loading") {
    image = <Skeleton />;
  } else if (status === "error") {
    image = <Error />;
  } else {
    image = <img src={data} alt={`${commonName} Flag`} />;
  }

  return (
    <Container>
      {image}
      <CardInfo
        commonName={commonName}
        population={population}
        region={region}
        capital={(Array.isArray(capital)) ? capital.flat(Infinity).toString() : capital}
      />
    </Container>
  );
}

Card.defaultProps = { 
  population: "Unknown",
  region: "Unknown",
  capital: "Unknown",
}

Card.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired, 
};



export default Card;
