import React from "react";

const Persons = ({ persons, pageFilter, newFilter }) =>
  pageFilter
    ? persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((filtered) => (
          <li key={filtered.name} style={{ listStyle: "none" }}>
            {filtered.name} {filtered.number}
          </li>
        ))
    : persons.map((person) => (
        <li key={person.name} style={{ listStyle: "none" }}>
          {person.name} {person.number}
        </li>
      ));

export default Persons;
