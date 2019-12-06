import React from 'react';
import {PlayerCard} from "./Component/PlayerCard";
import axios from "axios"

import './App.css';

class App extends React.Component { 

state = {
  players: []
}

componentDidMount() {
  axios
  .get("http://localhost:5000/api/players")
  .then(response => {
    console.log(response)
    this.setState({players: response.data})
  })
}

componentDidUpdate(prevProp, prevState) {
if (prevState.players !== this.state.players){

 }
}

handleChanges = e => {
  this.setState({
    userText: e.target.value
  })
}


  render() {

  return (
    <div className="App">
      <h1>Women's World Cup</h1>
      <div className="players" data-testid="players"> 
        {this.state.players.map(player => (
          <PlayerCard key={player.id} name={player.name} country={player.country} searches={player.searches}/>
        ))}
      </div>
    </div>
  );
  }
}

export default App;
