import React from "react";

export class ActionsContainer extends React.Component{
  render() {
    return(
      <div>
        <ol>
          {
            this.props.actions.map((action) =>
              <li key={action.id}><b>{action.name}</b> - {action.desc}.</li>
            )
          }
        </ol>
      </div>
    )
  }
}