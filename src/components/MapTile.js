import React from "react";

export class MapTile extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.onClick()}>{this.props.tile.type}</div>
    )
  }
}