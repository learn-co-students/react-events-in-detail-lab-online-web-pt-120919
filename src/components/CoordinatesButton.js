// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    clickHandler = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    render(){
        return (
            <button onClick={this.clickHandler}>Click me</button>
        );
    }
}

export default CoordinatesButton;