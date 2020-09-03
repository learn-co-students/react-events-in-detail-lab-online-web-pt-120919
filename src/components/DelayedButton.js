import React, { Component } from "react"

class DelayedButton extends Component {
    
    timer = (event) => {
        debugger
        event.persist()
            window.setTimeout(() => {
                debugger
                this.props.onDelayedClick(event)
            }, this.props.delay)
      
    }

    render(){
        return(
            <div>
                <button onClick={this.timer} onChange={this.props.onDelayedClick}>Set Delay</button>
            </div>
        )
    }
}

export default DelayedButton