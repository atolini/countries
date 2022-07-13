/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* 
*   Smart Component: 
*    Receives the research object and assembles the visualization; 
*/
import React, { useState, useEffect } from "react";
import { Container } from "./RenderCard.style";
import Card from "../../../components/card/Card";
import PageUpButton from "../../../components/page-up-button/PageUpButton";

function FilterMode({ query, data }) {
  const [result, setResult] = useState([]);

  const filterByRegion = (param) => {
    return param.filter((element) => {
      if (
        element.region
          .toString()
          ?.toLowerCase()
          ?.indexOf(query.region.toLowerCase()) > -1
      ) {
        return element;
      }
    });
  };

  const filterByQuery = (param) => {
    return param.filter((element) => {
      return (
        element.name.common
          ?.toString()
          ?.toLowerCase()
          ?.indexOf(query.filter.toLowerCase()) > -1
      );
    });
  };

  useEffect(() => {
    if (query.filter === "" && query.region !== "") {
      setResult(filterByRegion(data.data));
    } else if (query.region === "" && query.filter !== "") {
      setResult(filterByQuery(data.data));
    } else if (query.region !== "" && query.filter !== "") {
      let arr = filterByRegion(data.data);
      setResult(filterByQuery(arr))
    }
  }, [query]);

  return (
    <Container>
      {result.map((element) => {
        return (
          <Card
            key={element.name.common}
            flagUrl={element.flags.png}
            commonName={element.name.common}
            population={element.population}
            region={element.region}
            capital={element.capital}
          />
        );
      })}
      <PageUpButton />
    </Container>
  );
}

export default FilterMode;
