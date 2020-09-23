// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  whenClicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return (
      <button onClick={this.whenClicked}>Get Mouse Coordinates</button>
    )
  }
}

export default CoordinatesButton;