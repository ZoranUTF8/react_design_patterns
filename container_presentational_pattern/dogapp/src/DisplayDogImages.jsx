import React from "react";
//? If we want we can use the hook for getting the data instead of using the the container to
//? to fetch the data and than pass it to here
import useDogImages from "./useDogImages";

// ? Presentational Component
const DisplayDogImages = ({ dogsImagesData }) => {
  const { isLoading, error, dogs } = useDogImages();
  console.log(isLoading, error, dogs);
  //? Using the container pattern where container passes the data
  // return dogsImagesData.map((dog) => (
  //   <img src={dog.src} key={dog.id} alt="Dog image" />
  // ));

  //? Using the custom hook for getting the data instead of using the container
  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : dogs ? (
        dogs.map((dog, i) => <img src={dog} key={i} alt="Dog image" />)
      ) : (
        <span>{JSON.stringify(error)}</span>
      )}
    </ul>
  );
};

export default DisplayDogImages;
