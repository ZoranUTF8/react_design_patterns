import React, { useState, useEffect } from "react";
import DisplayDogImages from "./DisplayDogImages";

const DisplayDogImagesContainer = () => {
  const [dogsData, setDogsData] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then(({ message }) => {
        setDogsData(message);
      })
      .catch((err) => {
        console.log(`Error fetching images: ${err}`);
      });
  }, []);

  if (dogsData.length < 1) return <h1>Loading data...</h1>;

  return (
    <div>
      DisplayDogImagesContainer
      <DisplayDogImages dogsImagesData={dogsData} />
    </div>
  );
};

export default DisplayDogImagesContainer;
