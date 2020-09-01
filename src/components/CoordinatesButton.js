import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    createArray = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.createArray}>COORDINATES BUTTON</button>
        )
    }

}
