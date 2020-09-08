// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    render() {
        return <button onClick={this.handleClick}>No Me!</button>

    }

    handleClick = (event) => {
        event.persist()
        let delay = this.props.onDelayedClick(event)
        setTimeout(function() {delay}, this.props.delay)
    }
}