import React from 'react'

function InputBox(props) {
    return (
        <div>
            <input style={styles.myInputBox} placeholder={props.placeholderText}></input>     
        </div>
    );
}

export default InputBox
//Styles
const styles = {
    myInputBox: {
        width: '17em',
        height: '2em',
        backgroundColor: '#fff',
        color: '#232323',
        border: 'none',
        borderRadius: 5
    }
}