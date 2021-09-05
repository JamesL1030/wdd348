import React from 'react'

const APIOutput = props => {
    return (   
        <div>
            <h1>{props.weatherMain}</h1>
            <h1>{props.weatherDescription}</h1>
            <h1>{props.weatherIcon}</h1>  
        </div>
    )
}

export default APIOutput
