/* 
*   Smart Component: 
*    Get the array and assemble the view; 
*/
import React from "react";
import { Container, ButtonsContainer } from "./RenderCard.style";
import Card from "../../../components/card/Card";
import LoadMoreButton from "../../../components/load-more-button/LoadMoreButton";
import PageUpButton from "../../../components/page-up-button/PageUpButton";

function PaginateRenderCardMode({ hasNextPage, nextPage, data }) {
  return (
    <>
      <Container>
        {data.map((element) => {
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
      </Container>
      <ButtonsContainer>
        <LoadMoreButton hasNextPageParam={hasNextPage} clickFunc={nextPage} />
        <PageUpButton />
      </ButtonsContainer>
    </>
  );
}

export default PaginateRenderCardMode;
