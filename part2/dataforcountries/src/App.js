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
          console.log("start here tomorrow");
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
      <ul>{country}</ul>
    </div>
  );
};

export default App;
