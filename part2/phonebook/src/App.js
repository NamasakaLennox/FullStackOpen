import React from "react";
import { useState } from "react";
const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    const personObj = {
      name: newName,
    };
    // console.log("new person", personObj);
    setPersons(persons.concat(personObj));
    setNewName("");
  };

  const handleChange = (event) => {
    // console.log("check", event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <li key={person.name} style={{ listStyle: "none" }}>
          {person.name}
        </li>
      ))}
    </div>
  );
};

export default App;
