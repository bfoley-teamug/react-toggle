import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John Lennon', age: 40 },
      { name: 'David Bowie', age: 69 }
    ],
    otherState: "let's dance put on your red shoes and dance the blues",
    showPersons: false
  }

nameChangeHandler = (e) => {
  this.setState({
    persons: [
      { name: 'Charlie Parker', age: 34 },
      { name: e.target.value, age: 66 }
    ]
  })
}

deletePersonHandler = (personIndex) => {
  const persons = this.state.persons;
  persons.splice(personIndex, 1);
  this.setState({persons}); 
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {

    const style = {
      backgroundColor: 'white',
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
                age={person.age}/>
          })}

          <Person />

        </div>
      )
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
