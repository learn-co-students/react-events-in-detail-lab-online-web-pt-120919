// Code CoordinatesButton Component Here
import React, { Component } from 'react'


export default class CoordinatesButton extends Component {
    render() {
        return <button onClick={this.handleClick}>Click Me!</button>
    }

    handleClick = (event) => {
        const mouseCoordinates = []
        mouseCoordinates.push(event.clientX)
        mouseCoordinates.push(event.clientY)
        return this.props.onReceiveCoordinates(mouseCoordinates)
    }
}
