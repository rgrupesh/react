import React from "react";

const SearchParms = () => {
  const location = "Seattle, WA";

  return (
    <div className="Search-Parms">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParms;
