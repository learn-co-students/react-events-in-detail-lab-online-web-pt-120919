import React, { Component } from "react";

export default class CoordinatesButton extends Component {
  findCoordinates = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
  render() {
    return <button onClick={this.findCoordinates}>button</button>;
  }
}
