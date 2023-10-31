import React, { useState, useEffect } from "react";
import DogFactContainer from "./DogFactContainer";
import "./DogFact.css";

export default function DogFact() {
  const [fact, setFact] = useState(null);
  // const cleanFact =
  //   dogFact && dogFact.attributes ? dogFact.attributes.body : null;

  // Define the API endpoint
  const apiCall = "https://dogapi.dog/api/v2/facts/";

  // Create a function to fetch the dog fact
  const fetchDogFact = async () => {
    await fetch(apiCall)
      .then((res) => res.json())
      .then((data) => {
        if (data.data) {
          let cleanData = data.data;
          setFact(cleanData[0].attributes.body);
        }
      })
      .catch((err) => {
        console.log("error fetching", err);
      });
  };
  // Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    fetchDogFact(); // Fetch new data
  }, []);

  return (
    <div className="dogfact">
      <DogFactContainer className="text-container" fact={fact} />
      <button className="btn" onClick={fetchDogFact}>
        New Dog Fact
      </button>
    </div>
  );
}
