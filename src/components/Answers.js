import React from 'react'

function Answers(props) {
    return (
        <div>
            <button type="button" className="btnAnswer" onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
        </div>
    )
}

export default Answers;
