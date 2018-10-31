import React, { Component } from 'react';
import './App.css';
import { StatusContainer } from './components/StatusContainer';
import { MapContainer } from './components/MapContainer';
import { ActionsContainer } from './components/ActionsContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [
        {
          name: "John",
          type: "knight",
          level: 3
        },
        {
          name: "Mark",
          type: "hunter",
          level: 2
        },
        {
          name: "Jonathan",
          type: "priest",
          level: 4
        }
      ],
      tiles: {
        actual: {
          type: "path",
          difficulty: 1
        },
        north: {
          type: "town",
          difficulty: 1
        },
        south: {
          type: "swamp",
          difficulty: 4
        },
        east: {
          type: "forest",
          difficulty: 3
        },
        west: {
          type: "forest",
          difficulty: 3
        },
      },
      actions: [
        {
          id: 1,
          name: "Attack",
          desc: "attack the foes directly"
        },
        {
          id: 2,
          name: "Bargain",
          desc: "talk the thugs to go away"
        },
        {
          id: 3,
          name: "Enchant",
          desc: "use magic to change the mind og thugs"
        },
        {
          id: 4,
          name: "Run away",
          desc: "you can always run away and save your ass"
        }
      ]
    }
  }

  render() {
    return (
      <div className="App-container">
        <h3>Adventure Game</h3>
        <div className="App-game">
          <div className="App-status">
            <StatusContainer heroes={this.state.heroes}/>
          </div>
          <div className="App-map">
            <MapContainer tiles={this.state.tiles}/>
          </div>
          <div className="App-actions">
            <ActionsContainer actions={this.state.actions}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
