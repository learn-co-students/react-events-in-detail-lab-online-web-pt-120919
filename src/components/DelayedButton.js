// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {
  buttonTimout = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return(
      <button onClick={this.buttonTimout}>Click Me</button>
    )
  }
}

export default DelayedButton;