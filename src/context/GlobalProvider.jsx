import React, { createContext, useReducer } from "react";
import FetchStatusReducer from "./reducers/FetchStatusReducer";
import RenderModeReducer from './reducers/RenderModeReducer';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [renderMode, renderModeDispatch] = useReducer(
    RenderModeReducer, { mode: 'paginate'});
  const [fetchStatus, fetchStatusDispatch] = useReducer(
    FetchStatusReducer,
    "loading"
  );

  const value = {
    renderMode,
    renderModeDispatch
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
