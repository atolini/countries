/* eslint-disable no-unused-vars */
/*
 *   Manages service request and caching
 *
 */

import axios from "axios";
import { useQuery, useQueryClient } from "react-query";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";

function useFetch() {
  const { fetchStatusDispatch } = useContext(GlobalContext);
  const queryClient = useQueryClient();

  //Requisition Function
  const reqAllCountries = () => axios.get(process.env.REACT_APP_ALL_COUNTRIES);

  //Cache settings object
  const defaultCacheSettings = {
    cacheTime: Infinity,
    staleTime: Infinity,
  };

  //Function createPaginateArr
  const createPaginateArr = (array) => {
    let index = 0;
    let length = 8;
    let slicedArray = [];

    for (let i = 0; i < array.length / length; i++) {
      slicedArray.push(array.slice(index, index + length));
      index += length;
    }

    queryClient.setQueryData("paginateCountries", slicedArray);
  };

  //React Query
  return useQuery("allCountries", reqAllCountries, {
    select: (data) => createPaginateArr(data.data),
    ...defaultCacheSettings,
  });
}

export default useFetch;
