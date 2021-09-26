import React from 'react';
import Header from '../components/Header';
import mySun from '../Images/mySun.png';
import cloudy from '../Images/cloudy.png';
import partCloudy from '../Images/partCloudy.png';
import moon from '../Images/moon.png';

const APIOutput = props => {
    var myIcon;
    if (props.weatherIcon === '01d') {
        myIcon = mySun
    }
    else if ((props.weatherIcon === '02d')) {
        myIcon = partCloudy
    }
    else if ((props.weatherIcon === '03d')) {
        myIcon = cloudy
    }
    else if ((props.weatherIcon === '04d')) {
        myIcon = cloudy
    }
    else if ((props.weatherIcon === '05d')) {
        myIcon = moon
    }

    return (   
        <div style={styles.container}>   
            <Header />    
            <h2 style={styles.locationText}>{props.locationName}</h2>
            <div style={styles.myBox}>
                <h2 style={styles.boxContent}>{props.currentTemp}&deg;</h2>
                <h2 style={styles.boxContent}>{props.weatherDescription}</h2>
                <div style={styles.iconStyle}>
                    <img src={myIcon} alt='weather icon'/>
                </div>
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
        borderRadius: 10,
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '2em'
    },
    myBox2: {
        margin: '2em auto',
        height: '24em',
        width: '98%',
        backgroundColor: '#fff',
        borderRadius: 10
    },
    locationText: {
        color: '#EEFBFB',
        display: 'flex',
        justifyContent: 'center'
    },
    boxText: {
        color: '#EEFBFB'
    },
    iconStyle: {
        display: 'flex',
        justifyContent: 'center'
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
