import React from 'react';
import mySun from '../Images/mySun.png';
import cloudy from '../Images/cloudy.png';
import partCloudy from '../Images/partCloudy.png';
import moon from '../Images/moon.png';

const WeatherGrid = props => {
    var weatherIcon;
    if (props.myIcon === '01d') {
        weatherIcon = mySun
    }
    else if ((props.myIcon === '02d')) {
        weatherIcon = partCloudy
    }
    else if ((props.myIcon === '03d')) {
        weatherIcon = cloudy
    }
    else if ((props.myIcon === '04d')) {
        weatherIcon = cloudy
    }
    else if ((props.myIcon === '05d')) {
        weatherIcon = moon
    }

    return (
        <div style={styles.myContainer}>
            <div style={styles.myBox}>
                <h2 style={styles.boxContent}>{props.myLocation}</h2>
                <h2 style={styles.boxContent}>{props.myTemp}</h2>
                <div style={styles.iconStyle}>
                    <img src={weatherIcon} alt='weather icon'/>
                </div>
            </div>
        </div>
    );
}

export default WeatherGrid
//Styles
const styles = {
    myBox: {
        width: '45vw',
        height: '10.3em',
        backgroundColor: '#4DA8DA',
        color: '#EEFBFB',
        borderRadius: 6,
        margin: '.5em'
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0
    },
    iconStyle: {
        display: 'flex',
        justifyContent: 'center'
    }
}