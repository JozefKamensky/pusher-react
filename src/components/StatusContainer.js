import React from "react";

export class StatusContainer extends React.Component {

  render() {
    return(
      <div>
        <div>This is Status Container</div>
        <ul>
          {this.props.heroes.map((hero, i) =>
            <li key={i}>{hero.name} - {hero.type} ({hero.level})</li>
          )}
        </ul>
      </div>
    );
  }
}