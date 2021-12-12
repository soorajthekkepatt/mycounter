import React from 'react'

function Controller(props) {
    
    return (
    <div className="count-controller">
        <div className="action">
            <button onClick={()=>{props.control('plus')}}>+</button>
        </div>
        <div className="action">
            <button onClick={()=>{props.control('minus')}}>-</button>
        </div>
    </div>
    )
}

export default Controller
