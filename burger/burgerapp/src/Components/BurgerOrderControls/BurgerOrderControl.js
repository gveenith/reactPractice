import React from 'react'
export const Burgerordercontrol = (props) => {
    return (
        <div>
        <label>{props.label}</label>
        <button onClick = {props.add} >Add</button>
        <button onClick = {props.remove}>Remove</button>
        </div>
    )
}

export default Burgerordercontrol