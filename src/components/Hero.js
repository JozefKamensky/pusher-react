import React from "react";
import './Hero.css';

export class Hero extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Hero-container">
        <img className="Hero-avatar" src={require('../img/avatars/' + this.props.hero.type + '.jpg')}/>
        <div className="Hero-name">{this.props.hero.name}</div>
        <div className="Hero-level">Level {this.props.hero.level}</div>
      </div>
    )
  }
}