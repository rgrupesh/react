import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     color: "Black",
  //     type: "Sweet",
  //   })
  // );
  return (
    <div>
      <h1 id="new id">Adopt Me!</h1>
      <Pet name="Luna" color="Black" type="sweet" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
