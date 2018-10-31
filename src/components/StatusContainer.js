import React from "react";
import { Hero } from './Hero';

export class StatusContainer extends React.Component {

  render() {
    return(
      <div>
        {/*<div>This is Status Container</div>*/}
        {this.props.heroes.map((hero, i) =>
          <Hero key={i} hero={hero}/>
        )}
      </div>
    );
  }
}