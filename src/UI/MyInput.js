import React from 'react';

function MyInput({placeholder, className}) {
    return (
        <textarea placeholder={placeholder} className={className}></textarea>
    );
};

export default MyInput;