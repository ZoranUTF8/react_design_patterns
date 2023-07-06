import React from "react";
import useFetchData from "../../hooks/useFetchData";
import Listings from "../presentational/Listings";
const ListingsContainer = () => {
  const { data, loading, error } = useFetchData(
    "https://house-lydiahallie.vercel.app/api/listings"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred: {error}</div>;
  }

  return (
    <div>
      <Listings data={data} />
    </div>
  );
};

export default ListingsContainer;
