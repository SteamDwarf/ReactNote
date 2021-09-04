import React from 'react';
import classes from './MyTextarea.module.css';

function MyTextarea(props) {
    return (
        <textarea {...props} className={classes.textarea}></textarea>
    );
};

export default MyTextarea;