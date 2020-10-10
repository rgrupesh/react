import React from "react";
import { render } from "react-dom";
import SearchParams from "./Search";

const App = () => {
  return (
    <div>
      <h1 id="new id">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
