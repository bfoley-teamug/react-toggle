import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'John Lennon', age: 40 },
      { id: 'b', name: 'David Bowie', age: 69 }
    ],
    otherState: "let's dance put on your red shoes and dance the blues",
    showPersons: false
  }

nameChangeHandler = (e, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = e.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;

  this.setState({ persons: persons })
}

deletePersonHandler = (personIndex) => {
  //const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons});
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>

          {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(e) => this.nameChangeHandler(e, person.id)}

                />
          })}
        </div>
      );

      style.backgroundColor = '#add8e6';
      style.color = "blue"; 
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App. </h1>
        <p>Yes, hello, and good morning</p>
         <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Name</button>

        {persons}

      </div>
    );
  }
}

export default App;
