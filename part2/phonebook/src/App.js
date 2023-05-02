import React from "react";
import { useState, useEffect } from "react";

import personService from "./services/contacts";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [pageFilter, setFilter] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    //console.log("effect");
    personService.getAll().then((allPersons) => {
      // console.log("promise fulfilled");
      setPersons(allPersons);
    });
  }, []);
  console.log(">", persons.length, "rendered");

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
      //} else if (persons.some((el) => el.number === personObj.number)) {
      // console.log("found");
      //window.alert(`${newNumber} is already added to phonebook`);
    } else {
      personService.createContact(personObj).then((newContact) => {
        setPersons(persons.concat(newContact));
      });
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
