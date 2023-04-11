import React from "react";
import { useState } from "react";
const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((el) => el.name === personObj.name)) {
      // console.log("found");
      window.alert(`${newName} is already added to phonebook`);
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
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name} style={{ listStyle: "none" }}>
          {person.name} {person.number}
        </li>
      ))}
    </div>
  );
};

export default App;
