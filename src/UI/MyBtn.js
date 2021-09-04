import React from 'react';
import classes from './MyBtn.module.css';

function MyBtn({children, onClick}) {
  return (
    <button 
      onClick={onClick} 
      className={classes.post_btn}
    >
      {children}
    </button>
  );
};

export default MyBtn;