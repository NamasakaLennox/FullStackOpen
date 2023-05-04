import React from "react";
import { useState, useEffect } from "react";

import personService from "./services/contacts";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [pageFilter, setFilter] = useState(false);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [message, setMessage] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
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
      const elem = persons.find((person) => person.name === personObj.name);
      // console.log("found");
      window.confirm(
        `${newName} is already added to phonebook, replace old number with new one?`
      )
        ? personService
            .updateContact(elem.id, personObj)
            .then((response) => {
              setPersons(
                persons.map((person) =>
                  person.id !== elem.id ? person : response
                )
              );
              setMessage(`Updated ${newName}`);
              setTimeout(() => {
                setMessage(null);
              }, 5000);
            })
            .catch((error) => {
              setErrorMsg(
                `Information of ${newName} has already been removed from server`
              );
              setTimeout(() => {
                setErrorMsg(null);
              }, 5000);
            })
        : console.log("did not update");
      //} else if (persons.some((el) => el.number === personObj.number)) {
      // console.log("found");
      //window.alert(`${newNumber} is already added to phonebook`);
    } else {
      personService.createContact(personObj).then((newContact) => {
        setPersons(persons.concat(newContact));
        setMessage(`Added ${newName}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
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

  const handleDelete = (id, name) => {
    console.log("delete button clicked: item id -> " + id + " " + name);
    personService.deleteContact(id);
    //personService.getAll().then((allPersons) => {
    setPersons(persons.filter((person) => person.id !== id));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <ErrorMessage message={errorMsg} />
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
