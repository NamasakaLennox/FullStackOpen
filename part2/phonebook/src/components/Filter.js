import React from "react";

const Filter = ({ newFilter, handleFilter, filterPage }) => (
  <div>
    Filter shown with:{" "}
    <input
      value={newFilter}
      onChange={(event) => {
        handleFilter(event);
        filterPage(event);
      }}
    />
  </div>
);

export default Filter;
