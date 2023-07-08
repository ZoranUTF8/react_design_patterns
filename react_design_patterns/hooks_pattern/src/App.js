import * as React from "react";
import "./App.css";
import Listings from "./components/presentational/Listings";
import useListings from "./customHooks/useListings";

export default function App() {
  const { data, isLoading, error } = useListings();

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Error: {error.message}</h1>
      </div>
    );
  }

  return <Listings listings={data} />;
}
