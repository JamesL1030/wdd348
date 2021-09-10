import React from 'react';
import Header from '../components/Header'

const APIOutput = props => {
    return (   
        <div style={styles.container}>   
            <Header />    
            <h2>{props.locationName}</h2>
            <div style={styles.myBox}>
                <h1>{props.weatherTemp}&deg;</h1>
                <h1>{props.weatherMain}</h1>
                <h1>{props.weatherDescription}</h1>
                <h1>{props.weatherIcon}</h1>  
            </div>
        </div>
    )
}

export default APIOutput
//Styles
const styles = {
    container: {
        backgroundColor: 'orange',
        height: '100vh',
    },
    myBox: {
        margin: 'auto',
        height: '250px',
        width: '98%',
        backgroundColor: '#fff'
    }
}
