/* eslint-disable react-hooks/exhaustive-deps */
/*
 *  Smart Component:
 *   Controls the view mode;
 *   Controls pagination;
 *   Controls Data Fetching;
 *   Controls user entries;
 */
import React, { useState, useEffect } from "react";
import SearchInput from "../../components/search-input/SearchInput";
import SelectInput from "../../components/select-input/SelectInput";
import { Container } from "./Home.style";
import useFetch from "../../hooks/useFetch";
import PaginateMode from "./render-card/PaginateMode";
import FilterMode from "./render-card/FilterMode";
import { useQueryClient } from "react-query";

function Home() {
  const { status } = useFetch();
  const [query, setQuery] = useState({ region: "", filter: "" });
  const [renderMode, setRenderMode] = useState("paginate");
  const queryClient = useQueryClient();
  const paginateCountries = queryClient.getQueryData("paginateCountries");
  const allCountries = queryClient.getQueryData("allCountries");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  // Controls the Pagination
  const nextPage = () => {
    setData((data) => [...data, ...paginateCountries[page]]);
    setPage((page) => page + 1);

    if (page === paginateCountries.length - 1) {
      setHasNextPage(false);
    }
  };

  // Controls the Pagination
  useEffect(() => {
    if (status === "success") {
      setData(paginateCountries[0]);
    }
  }, [status]);

  // Controls the users input and render mode
  const handleSelectInput = (value) => {
    if (value !== "") {
      setRenderMode("filter");
      setQuery({ ...query, region: value });
    } else {
      setQuery({ ...query, region: "" });

      if (query.filter === "") {
        setRenderMode("paginate");
      }
    }
  };

  // Controls the users input and render mode
  const handleSearchInput = (value) => {
    if (value !== "") {
      setRenderMode("filter");
      setQuery({ ...query, filter: value });
    } else {
      setQuery({ ...query, filter: "" });

      if (query.region === "") {
        setRenderMode("paginate");
      }
    }
  };

  // Rendering
  if (status === "loading") {
    return <h1>Loading ...</h1>;
  }

  if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Container>
        <SearchInput func={handleSearchInput} />
        <SelectInput func={handleSelectInput} />
      </Container>
      {renderMode === "paginate" ? (
        <PaginateMode
          nextPage={nextPage}
          hasNextPage={hasNextPage}
          data={data}
        />
      ) : (
        <FilterMode query={query} data={allCountries} />
      )}
    </>
  );
}
export default Home;
