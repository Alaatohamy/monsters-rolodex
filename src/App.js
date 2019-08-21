import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import Input from './components/search-box/search-box';

class App extends Component{

  state ={
    monsters: [],
    error: '',
    searchWord: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data =>
      this.setState({monsters: data})
    )
    .catch(err => this.setState({error: 'Something wrong happened'}));
  }

  searchHandleChange = e => {
    this.setState({searchWord: e.target.value });
  }

  render(){
    const {monsters, error, searchWord} = this.state;
    const listedMonsters = 
      searchWord ? monsters.filter(monster => monster.name.toLowerCase().includes(searchWord.toLowerCase())) : monsters ;

    return (
      <div className="App">
        <h1 className="main-header">Cats List</h1>
        <Input handleChange={this.searchHandleChange} placeholder='Filter by name' label="Filter:"/>
        <section>
        {
          error ? error : 
          <CardList monsters={listedMonsters} />
        }
        </section>
      </div>
    );
  }
}

export default App;
