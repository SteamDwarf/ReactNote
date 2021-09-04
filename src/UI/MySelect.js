import React from 'react';

function MySelect({options, changeSortOption}) {
  return (
    <select onChange={(e) => changeSortOption(e.target.value)}>
      <option disabled value='default'>Сортировка по</option>

      {options.map(op => 
        <option value={op.value} key={op.value}>{op.text}</option> 
      )}
    </select>
  );
};

export default MySelect;
