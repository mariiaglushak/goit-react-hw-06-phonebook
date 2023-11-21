import React, { useState } from 'react';

import { LabelFilter, InputFilter } from './FilterStyle';

const Filter = ({ text }) => {
  const [filter, setFilter] = useState('');


  const handlerInputFilter = e => {
    setFilter(e.currentTarget.value);
  };


 

  return (
    <LabelFilter>
      {text}
      <InputFilter type="text" value={filter} onChange={handlerInputFilter} />
    </LabelFilter>
  );
};

export default Filter;
