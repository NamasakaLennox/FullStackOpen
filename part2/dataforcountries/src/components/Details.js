import React from "react";

const Details = ({ filtered }) => (
  <>
    <h1 key={filtered.name.common}>{filtered.name.common}</h1>
    capital: {filtered.capital[0]} <br />
    area: {filtered.area} <br />
    <h3>languages</h3>
    <ul>
      {Object.values(filtered.languages).map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
    <img
      src={filtered.flags.png}
      alt={filtered.flags.alt}
      style={{ width: 150, height: 100 }}
    />
  </>
);

export default Details;
