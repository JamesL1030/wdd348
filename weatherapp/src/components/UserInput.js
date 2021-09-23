import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import InputBox from './InputBox';
import MyButton from './MyButton';
import GridBaltimoreAPI from './GridBaltimoreAPI';
import GridOrlandoAPI from './GridOrlandoAPI';
import GridDenverAPI from './GridDenverAPI';
import GridHagerstownAPI from './GridHagerstownAPI';
import GridMiamiAPI from './GridMiamiAPI';
import GridOrmondAPI from './GridOrmondAPI';

const UserInput = () => {
    return(     
        <div style={styles.container}>
            <Header />
            <div style={styles.inputBox}>
                <InputBox style={styles.inputBox} placeholderText='Search' />
            </div>
            <div style={styles.myBtn}>
                <MyButton buttonText='Search' />
            </div>       
            <div style={styles.row}>
                <NavLink to="/MiamiAPI"><GridMiamiAPI /></NavLink>
                <NavLink to="/OrmondBeachAPI"><GridOrmondAPI /></NavLink>
            </div>
            <div style={styles.row}>
                <NavLink to="/BaltimoreAPI"><GridBaltimoreAPI /></NavLink>
                <NavLink to="/OrlandoAPI"><GridOrlandoAPI /></NavLink>
            </div>
            <div style={styles.row}>
                <NavLink to="/DenverAPI"><GridDenverAPI /></NavLink>
                <NavLink to="/HagerstownAPI"><GridHagerstownAPI /></NavLink>
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
        display: 'flex',
        margin: '1em auto',
        justifyContent: 'center'
    },
    myBtn: {
        display: 'flex',
        justifyContent: 'center'
    }
}
