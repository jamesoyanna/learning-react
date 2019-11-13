import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: 'James Oyanna', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  };

nameChangeHandler = (event)=>{
  this.setState({
    persons: [
      { name: 'james oyanna', age: 28 },
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 27 }
    ]
  });
}

  render() {
  
const styler = {
  backgroundColor: "brown",
  font: "inherit",
  color: "white",
  border: "2px solid blue",
  padding: "8px",
  cursor: "pointer",
  borderRadius: "50px"
}    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
        style = {styler}
         onClick={()=>this.switchNameHandler('sanni Uje')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        
        click={this.switchNameHandler.bind(this, 'ozofu')}
        changed= {this.nameChangeHandler} >My Hobbies: Racing 
        
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
