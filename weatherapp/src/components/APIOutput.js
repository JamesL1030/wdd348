import React from 'react';
import Header from '../components/Header'

const APIOutput = props => {
    return (   
        <div style={styles.container}>   
            <Header />    
            <h2 style={styles.locationText}>{props.locationName}</h2>
            <div style={styles.myBox}>
                <h1 style={styles.boxText}>{props.currentTemp}&deg;</h1>
                <h1>{props.weatherMain}</h1>
                <h1>{props.weatherDescription}</h1>
                <h1>{props.weatherIcon}</h1>  
            </div>
            <div style={styles.myBox2}>
                <div style={styles.box2Text}>High<h3>{props.maxTemp}</h3></div>
                <div style={styles.box2Text}>Low<h3>{props.lowTemp}</h3></div>
                <div style={styles.box2Text}>Humidity<h3>{props.humidity}</h3></div> 
                <div style={styles.box2Text}>Wind<h3>{props.wind}</h3></div>
                <div style={styles.box2Text}>Sunrise<h3>{props.sunrise}</h3></div>
                <div style={styles.box2Text}>Sunset<h3>{props.sunset}</h3></div>
            </div>
        </div>
    )
}

export default APIOutput
//Styles
const styles = {
    container: {
        backgroundColor: '#203647',
        height: '100vh',
    },
    myBox: {
        margin: 'auto',
        height: '250px',
        width: '98%',
        backgroundColor: '#4DA8DA',
        borderRadius: 10
    },
    myBox2: {
        margin: '2em auto',
        height: '24em',
        width: '98%',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    locationText: {
        color: '#EEFBFB'
    },
    boxText: {
        color: '#EEFBFB'
    },
    box2Text: {
        borderBottom: '1px solid #D8D8D8',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        color: '#232323',
        padding: '0 1em'
    }
}
