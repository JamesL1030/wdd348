import React from 'react'

function MyButton(props) {
    return (
        <div>
            <button style={styles.myBtn}>{props.buttonText}</button>      
        </div>
    );
}

export default MyButton
//Styles
const styles = {
    myBtn: {
        width: '5.8em',
        height: '2em',
        backgroundColor: '#EEFBFB',
        color: '#232323',
        border: 'none',
        borderRadius: 5
    }
}