import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  handleClick = (e) => {
    const arr = [e.clientX, e.clientY];
    this.props.onReceiveCoordinates(arr);
  }
  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}