import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { name: 'Edward', age: 0 },
      { name: 'Owlette', age: 5 }
    ],
    otherState: 'Do not worry about me',
    showPersons: false
  }

switchNameHandler = (newName) => {
  console.log('Hey hey!')
  this.setState({
    people: [
      { name: newName, age: 1 },
      { name: 'Catboy', age: 6 }
    ]
  })
}

nameChangeHandler = (e) => {
  this.setState({
    people: [
      { name: 'Jet', age: 1 },
      { name: e.target.value, age: 6 }
    ]
  })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App. </h1>
        <p>Yes, hello, and good morning</p>
         <button
          //style={style}
          onClick={this.togglePersonsHandler}>Toggle Name</button>

        {
          this.state.showPersons === true ?

          <div>

            <Person name={this.state.people[0].name}
              age={this.state.people[0].age}
              click={this.switchNameHandler.bind(this, 'Blaze')}
              changed={this.nameChangeHandler}
            />
            <Person name={this.state.people[1].name} age={this.state.people[1].age} />
            <Person name="Dale" age="2" />
            <Person name="LB" age="37">Hobbies: Being awesome</Person>
            <Person />

          </div> : null
        }

      </div>
    );
  }
}

export default App;
