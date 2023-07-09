import React, { useContext } from "react";
import useListings from "../hooks/useListings";
export const ListingContext = React.createContext(null);

export function useListingsContext() {
  const { listings } = useContext(ListingContext);

  return { listings };
}

export function ListingsProvider({ children }) {
  const listings = useListings();
  return (
    <ListingContext.Provider value={{ listings }}>
      {children}
    </ListingContext.Provider>
  );
}
