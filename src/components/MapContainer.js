import React from 'react';
import './Map.css';
import { MapTile } from './MapTile';

export class MapContainer extends React.Component{
  constructor(props) {
    super(props);
  }

  handleClick(direction, type) {
    alert('direction: ' + direction + '\ntype: ' + type);
  }

  render() {
    return(
      <div className="Map-grid">
        <div className="Map-cell"/>
        <div className="Map-cell Map-north">
          <MapTile
            tile={this.props.tiles.north}
            onClick={() => this.handleClick('north', this.props.tiles.north.type)}
          />
        </div>
        <div className="Map-cell"/>
        <div className="Map-cell Map-west">
          <MapTile
            tile={this.props.tiles.west}
            onClick={() => this.handleClick('west', this.props.tiles.west.type)}
          />
        </div>
        <div className="Map-cell Map-actual">
          <MapTile
            tile={this.props.tiles.actual}
            onClick={() => this.handleClick('actual', this.props.tiles.actual.type)}
          />
        </div>
        <div className="Map-cell Map-east">
          <MapTile
            tile={this.props.tiles.east}
            onClick={() => this.handleClick('east', this.props.tiles.east.type)}
          />
        </div>
        <div className="Map-cell"/>
        <div className="Map-cell Map-south">
          <MapTile
            tile={this.props.tiles.south}
            onClick={() => this.handleClick('south', this.props.tiles.south.type)}
          />
        </div>
        <div className="Map-cell"/>
      </div>
    )
  }
}