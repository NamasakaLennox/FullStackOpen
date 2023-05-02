import React from "react";
//import personService from "../services/contacts";
//import { useState } from "react";

const Persons = ({ persons, pageFilter, newFilter, handleDelete }) =>
  pageFilter
    ? persons
        .filter((person) =>
          person.name.toLowerCase().includes(newFilter.toLowerCase())
        )
        .map((filtered) => (
          <li key={filtered.name} style={{ listStyle: "none" }}>
            {filtered.name} {filtered.number}{" "}
            <button
              onClick={() => {
                window.confirm(`Delete ${filtered.name}?`)
                  ? handleDelete(filtered.id, filtered.name)
                  : console.log("item not deleted");
              }}
            >
              Delete
            </button>
          </li>
        ))
    : persons.map((person) => (
        <li key={person.name} style={{ listStyle: "none" }}>
          {person.name} {person.number}{" "}
          <button
            onClick={() => {
              window.confirm(`Delete ${person.name}?`)
                ? handleDelete(person.id, person.name)
                : console.log("item not deleted");
            }}
          >
            Delete
          </button>
        </li>
      ));
export default Persons;
