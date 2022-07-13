import Button from "./LoadMoreButton.style";
import { useTheme } from "styled-components";
import React, { useState, useEffect } from "react";

function LoadMoreButton({ hasNextPageParam, clickFunc }) {
  const theme = useTheme();
  const [hasNextPage, setHasNextPage] = useState(hasNextPageParam);

  useEffect(() => {
    setHasNextPage(hasNextPageParam)
  }, [hasNextPageParam]); 

   if (!hasNextPage) {
    return <Button disabled>No More Countries</Button>;
  }

  return (
    <Button available onClick={clickFunc}>
      <img src={(theme.name === 'lightTheme') ? 'icons/plus-light.svg' : 'icons/plus-dark.svg'} alt="icon" />
      Load More Countries
    </Button>
  )
}

export default LoadMoreButton;
