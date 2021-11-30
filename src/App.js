import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from './components/search-box/search-boxcomponent'
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

   handleChange = (e) => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    console.log("igual hace esto");
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()));
    return (
      <div className="App">
        <SearchBox
          placeholder='search monster'
          handleChannge={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
