import React from "react";

export default function Pet({ name, color, type }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{color}</h2>
      <h3>{type}</h3>
    </div>
  );
}
