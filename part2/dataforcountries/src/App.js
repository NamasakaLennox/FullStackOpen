import React from "react";
import { useEffect, useState } from "react";

import Notification from "./components/Notification";
import CountryData from "./services/countries";

const App = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    CountryData.getAll().then((response) => {
      if (search === "") {
        setCountry([]);
      } else {
        const checkVal = response.filter((value) => {
          return value.name.common.toLowerCase().includes(search.toLowerCase());
        });
        console.log(checkVal.length);
        if (checkVal.length === 1) {
          setCountry(
            checkVal.map((filtered) => (
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
            ))
          );
        } else if (checkVal.length <= 10) {
          setCountry(
            checkVal.map((filtered) => (
              <li key={filtered.name.common}>{filtered.name.common}</li>
            ))
          );
        } else {
          setCountry([]);
          setMessage("Too many matches, specify another filter");
          setTimeout(() => {
            setMessage(null);
          }, 5000);
        }
      }
    });
  }, [search]);

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return (
    <div>
      <form>
        find countries <input value={search} onChange={handleSearch} />
      </form>
      <Notification message={message} />
      <div>{country}</div>
    </div>
  );
};

export default App;
