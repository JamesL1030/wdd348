import React from 'react'

const WeatherGrid = props => {
    return (
        <div>
            <div>
                <div style={styles.myBox}>
                    <h2 style={styles.boxContent}>{props.ormondLocation}</h2>
                    <h2 style={styles.boxContent}>{props.ormondTemp}</h2>
                    <h2 style={styles.boxContent}>{props.ormondIcon}</h2>
                    <h2 style={styles.boxContent}>{props.miamiLocation}</h2>
                    <h2 style={styles.boxContent}>{props.miamiTemp}</h2>
                    <h2 style={styles.boxContent}>{props.miamiIcon}</h2>
                    <h2 style={styles.boxContent}>{props.hagerstownLocation}</h2>
                    <h2 style={styles.boxContent}>{props.hagerstownTemp}</h2>
                    <h2 style={styles.boxContent}>{props.hagerstownIcon}</h2>
                    <h2 style={styles.boxContent}>{props.baltimoreLocation}</h2>
                    <h2 style={styles.boxContent}>{props.baltimoreTemp}</h2>
                    <h2 style={styles.boxContent}>{props.baltimoreIcon}</h2>
                    <h2 style={styles.boxContent}>{props.orlandoLocation}</h2>
                    <h2 style={styles.boxContent}>{props.orlandoTemp}</h2>
                    <h2 style={styles.boxContent}>{props.orlandoIcon}</h2>
                    <h2 style={styles.boxContent}>{props.denverLocation}</h2>
                    <h2 style={styles.boxContent}>{props.denverTemp}</h2>
                    <h2 style={styles.boxContent}>{props.denverIcon}</h2>
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
        margin: '.5em',
    },
    boxContent: {
        display: 'flex',
        justifyContent: 'center',
        margin: 0
    }
}