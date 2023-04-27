import React from "react";
import { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [pageFilter, setFilter] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const filterPage = (event) => {
    event.preventDefault();
    if (newFilter === "") {
      setFilter(false);
    } else {
      setFilter(true);
    }
  };
  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((el) => el.name === personObj.name)) {
      // console.log("found");
      window.alert(`${newName} is already added to phonebook`);
    } else if (persons.some((el) => el.number === personObj.number)) {
      // console.log("found");
      window.alert(`${newNumber} is already added to phonebook`);
    } else {
      setPersons(persons.concat(personObj));
    }
    setNewName("");
    setNewNumber("");
  };

  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  };
  // console.log(Object.values(persons).includes(newName));
  const handleNameChange = (event) => {
    // console.log("check", event.target.value);
    setNewName(event.target.value);
  };
  const handleFilter = (event) => {
    setNewFilter(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleFilter={handleFilter}
        filterPage={filterPage}
      />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumChange={handleNumChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        pageFilter={pageFilter}
        newFilter={newFilter}
      />
    </div>
  );
};

export default App;
