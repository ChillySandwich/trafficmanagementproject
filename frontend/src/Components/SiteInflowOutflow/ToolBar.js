import React from 'react'

export default function ToolBar(props) {
    return (
        <div>
            <input type="button" value="Toggle Colour" onClick={props.toggleColour}></input>
            <input type="button" value="-" onClick={props.decrease}></input>
            <input type="button" value="+" onClick={props.increase}></input>
        </div>
    )
}
