import React from 'react';

function MyBtn({children, className}) {
  return (
    <button className={className}>{children}</button>
  );
};

export default MyBtn;