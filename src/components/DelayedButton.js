// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    handleClick = event => {
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleClick}>Delay Me!</button>
        );
    }
}

export default DelayedButton;

/*

This component takes two props: onDelayedClick (a function), and delay (a number).

Create a button that, when clicked, will pass the click event to the onDelayedClick prop within a setTimeout(). 
The setTimeout() should be set to this.props.delay.

If successful, the event will be logged to the console once the timeout has finished.

Hint: If you having trouble with this feature, remember event pooling in React. By the time the setTimeout fires, the event object will have already been returned to the pool. So how can we fix that?

Resources*/