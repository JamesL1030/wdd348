import React from 'react'

const WeatherGrid = props => {
    return (
        <div>
            <div>
                <div style={styles.myBox}>
                    <h2>{props.ormondLocation}</h2>
                    <h2>{props.ormondTemp}</h2>
                    <h2>{props.miamiLocation}</h2>
                    <h2>{props.miamiTemp}</h2>
                    <h2>{props.hagerstownLocation}</h2>
                    <h2>{props.hagerstownTemp}</h2>
                    <h2>{props.baltimoreLocation}</h2>
                    <h2>{props.baltimoreTemp}</h2>
                    <h2>{props.orlandoLocation}</h2>
                    <h2>{props.orlandoTemp}</h2>
                    <h2>{props.denverLocation}</h2>
                    <h2>{props.denverTemp}</h2>
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
    }
}