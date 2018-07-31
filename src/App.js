import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'John Lennon', age: 40 },
      { name: 'David Bowie', age: 69 }
    ],
    otherState: "let's dance put on your red shoes and dance the blues",
    showPersons: false
  }

switchNameHandler = (newName) => {
  console.log('Hey hey!')
  this.setState({
    people: [
      { name: newName, age: 100 },
      { name: 'Bob Dylan', age: 77 }
    ]
  })
}

nameChangeHandler = (e) => {
  this.setState({
    people: [
      { name: 'Charlie Parker', age: 34 },
      { name: e.target.value, age: 66 }
    ]
  })
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
          <Person name={this.state.people[0].name}
            age={this.state.people[0].age}
            click={this.switchNameHandler.bind(this, 'George Harrison')}
            changed={this.nameChangeHandler}
          />
          <Person name={this.state.people[1].name} age={this.state.people[1].age} />
          <Person name="Jerry Garcia" age="53" />
          <Person name="Miles Davis" age="65">Hobbies: Being awesome</Person>
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
