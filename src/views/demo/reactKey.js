import React from "react";

export default class ReactKey extends React.Component {
  state = {
    persons: [
      { name: "yang", age: "18" },
      { name: "yang2", age: "19" },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.persons.map((person, index) => {
          return (
            <li key={index}>
              {t.name}---{t.age}
            </li>
          );
        })}
      </ul>
    );
  }
}
