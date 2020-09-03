import React from 'react'

function CoordiantesButton(props){

    function handleClick(event){
        props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    return(<button onClick={handleClick}>Click Me</button>)
}

export default CoordiantesButton