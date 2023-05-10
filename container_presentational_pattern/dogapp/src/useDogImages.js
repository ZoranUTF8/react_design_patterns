import { useState, useEffect } from "react";

//! Extracted logic that was present in the Display Dogs image component into a hook.
//! This hook will return an object that contains the isLoading, posts, and error values.

const useDogImages = () => {
  const [dogs, setDogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getDogImagesData();
  }, []);

  const getDogImagesData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://dog.ceo/api/breed/labrador/images/random/6"
      );
      const { message } = await response.json();
      setDogs(message);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { isLoading, dogs, error };
};

export default useDogImages;
