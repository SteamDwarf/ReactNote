import React from 'react';
import classes from './MyInput.module.css';

function MyInput(props) {
    return (
        <input {...props} className={classes.input}></input>
    );
};

export default MyInput;