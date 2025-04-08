import React from "react";

type Props = {
  onKeyPressed: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ onKeyPressed }: Props) => (
  <div className="input-group mb-12">
    <div className="input-group-prepend">
      <span
        className="input-group-text"
        id="basic-addon1"
        role="img"
        aria-label="search"
      >
        🔎
      </span>
    </div>
    <input
      type="text"
      className="form-control"
      placeholder="Sökterm"
      aria-label="Sökterm"
      aria-describedby="basic-addon1"
      autoFocus
      onChange={onKeyPressed}
    />
  </div>
);

export default SearchBar;
