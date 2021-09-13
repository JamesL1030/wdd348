import React from 'react';
import Header from '../components/Header';
import InputBox from './InputBox';
import MyButton from './MyButton';
import GridBaltimoreAPI from './GridBaltimoreAPI';
import GridOrlandoAPI from './GridOrlandoAPI';
import GridDenverAPI from './GridDenverAPI';
import GridHagerstownAPI from './GridHagerstownAPI';
import GridMiamiAPI from './GridMiamiAPI';
import GridOrmondAPI from './GridOrmondAPI';

function UserInput() {
    return(     
        <div style={styles.container}>
            <Header />
            <div style={styles.inputBox}>
                <InputBox  style={styles.inputBox} placeholderText='Search' />
            </div>
            <MyButton buttonText='Search' />
            <div style={styles.row}>
                <GridMiamiAPI />
                <GridOrmondAPI />
            </div>
            <div style={styles.row}>
                <GridBaltimoreAPI />
                <GridOrlandoAPI />
            </div>
            <div style={styles.row}>
                <GridDenverAPI />
                <GridHagerstownAPI />
            </div> 
        </div>
    )
};

export default UserInput;
//Styles
const styles = {
    container: {
        backgroundColor: '#203647',
        height: '100vh'
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    inputBox: {
        margin: '1em 0'
    }
}
