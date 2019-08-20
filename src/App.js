import React, {Component} from 'react';
import './App.css';
import CardList from './components/card-list/card-list';

class App extends Component{

  state ={
    monsters: [],
    error: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then( data =>
      this.setState({monsters: data})
    )
    .catch(err => this.setState({error: 'Something wrong happened'}));
  }

  render(){
    const {monsters, error} = this.state;
    return (
      <div className="App">
        <section>
        {
          error ? error : 
          <CardList monsters={monsters} />
        }
        </section>
      </div>
    );
  }
}

export default App;
