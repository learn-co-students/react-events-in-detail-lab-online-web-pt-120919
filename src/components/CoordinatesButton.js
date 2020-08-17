import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    createArray = (event) => {
        this.props.onReceiveCoordinates([event.clientY, event.clientX])
    }

    render() {
        return (
            <button onClick={this.createArray}>Coordinates Button</button>
        )
    }
}