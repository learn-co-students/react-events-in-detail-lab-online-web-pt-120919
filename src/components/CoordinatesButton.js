// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{
    
    creatArry = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    }
    
    
    render(){
        return(
            <button onClick={this.creatArry}> Button </button>
        )
    }

}


export default CoordinatesButton 