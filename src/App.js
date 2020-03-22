import React, { Component } from 'react';
import './App.css';
import Grid from './components/grid/Grid';
import SearchBox from './components/searchbox/SearchBox';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    //this.handleChange = this.handleChange.bind(this); // binds the context of "this" to the handleChange function
    // not needed if the function is an arrow function (ES6)
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1 className='monsters-pokedex'>Monsters PokeDex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <Grid monsters={filteredMonsters} />
      </div>
    );
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
}

export default App;
