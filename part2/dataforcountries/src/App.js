import React from "react";
import { useEffect, useState } from "react";

import Notification from "./components/Notification";
import CountryData from "./services/countries";
import Details from "./components/Details";

const App = () => {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState([]);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(null);

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
            checkVal.map((filtered) => <Details filtered={filtered} />)
          );
        } else if (checkVal.length <= 10) {
          setCountry(
            checkVal.map((filtered) => (
              <>
                <li key={filtered.name.common}>
                  {filtered.name.common}{" "}
                  <button onClick={() => handleClick(filtered)}>show</button>
                </li>
              </>
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

  const handleClick = (filtered) => {
    console.log("button clicked " + filtered.name.common);
    setShow(<Details filtered={filtered} />);
  };
  const handleSearch = (event) => {
    setShow(null);
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
      <div>{show}</div>
    </div>
  );
};

export default App;
