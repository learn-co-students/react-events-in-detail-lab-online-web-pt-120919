import React, { Component } from "react"
//commented out works is changes to the DOM were to be made.
class CoordinatesButton extends Component{
    // constructor for changes made.
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         coordinates: {x: 0, y: 0}
    //     }
    // }

    handleBtn = (event) => {
        // debugger
        // this.setState({x: event.clientX, y: event.clientY})
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

 // this.props.onReceiveCoordinates
    render(event) {
        //destructuring x and y from state obj.
        // const {x, y} = this.state
        return(
        <div className="cordinates">
                <button onClick={this.handleBtn}>Cordinates</button>
        {/* <h1>Coordinates x: {x} y: {y}</h1> */}
        </div>
        )
    }
}

export default CoordinatesButton