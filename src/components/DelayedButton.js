// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        return <button onClick={this.handleClick}>No Me!</button>

    }

    handleClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }
}