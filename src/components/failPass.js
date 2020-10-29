import React from 'react'

function FailPass(props) {
    if(props.correct>=2)
    {
        return(<div><h1 className="resultheader">Result:</h1><h2 className="Passed">Pass</h2></div>)
    }
    else{
        return(<div><h1 className="resultheader">Result:</h1><h2 className="Failed">Failed</h2></div>)
    }
    }
    


export default FailPass;
