import React, {Component} from 'react';
import CardList from  './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => response.json())
    .then( (users) => this.setState({monsters: users}));
    
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase()
                            .includes(searchField.toLowerCase()));
    return (
      <div className='App'>
          <h1>Monsters Roladex</h1>
          <SearchBox placeholder='Search Monster..' handleChange={this.handleChange}/>
          <CardList monster={filteredMonster} searchMonster={this.state.searchField}/>
      </div>
    );
  }
}

export default App;
