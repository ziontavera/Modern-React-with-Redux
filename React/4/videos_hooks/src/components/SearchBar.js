import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segmen">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Search Video</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
            placeholder="search videos"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
