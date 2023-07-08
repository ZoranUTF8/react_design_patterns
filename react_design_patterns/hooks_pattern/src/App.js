import * as React from "react";
import "./App.css";
import Listings from "./components/presentational/Listings";
import useListings from "./customHooks/useListings";

export default function App() {
  const data = useListings();

  if (!data) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return <Listings listings={data.listings} />;
}
