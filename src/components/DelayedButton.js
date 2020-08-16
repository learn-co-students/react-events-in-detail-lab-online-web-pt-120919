import React from "react";

export default class DelayedButton extends React.Component {
  handleClick = event => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Delay</button>
      </div>
    );
  }
}
