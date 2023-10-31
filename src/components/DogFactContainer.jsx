import React from "react";
import "./DogFactContainer.css";

export default function DogFactContainer({ fact }) {
  let cleanFact = fact;
  return (
    <div className="container">
      <h4>{!cleanFact ? "Loading" : cleanFact}</h4>
    </div>
  );
}
