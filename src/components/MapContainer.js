import React from "react";

export class MapContainer extends React.Component{
  render() {
    return(
      <div>
        <p>Actual: {this.props.tiles.actual.type}, {this.props.tiles.actual.difficulty}</p>
        <p>North: {this.props.tiles.north.type}, {this.props.tiles.north.difficulty}</p>
        <p>South: {this.props.tiles.south.type}, {this.props.tiles.south.difficulty}</p>
        <p>East: {this.props.tiles.east.type}, {this.props.tiles.east.difficulty}</p>
        <p>West: {this.props.tiles.west.type}, {this.props.tiles.west.difficulty}</p>
      </div>
    )
  }
}