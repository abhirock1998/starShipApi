import React, { useReducer, useContext, createContext } from "react";
export const DataLayerProvider = createContext();
export const DataLayer = ({ reducer, initialState, children }) => {
  return (
    <DataLayerProvider.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerProvider.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerProvider);
