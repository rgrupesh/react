import React from "react";

export default function Pet({ name, color, type }) {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, color),
    React.createElement("h2", {}, type)
  );
}
