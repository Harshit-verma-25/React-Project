import React from "react"

function Die(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div className="die-face" style={style}>
            <h1 className="die-num" onClick={props.holdDice}>{props.value}</h1>
        </div>
    )
}

export default Die