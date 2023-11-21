import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filter/filter.reducer';

import { LabelFilter, InputFilter } from './FilterStyle';

const Filter = ({ text }) => {
  const dispatch = useDispatch();
  const filter=useSelector(state=>state.filterStore.filter)
  
 


  const handlerInputFilter = e => {
 
    dispatch(addFilter(e.currentTarget.value))
  };


 

  return (
    <LabelFilter>
      {text}
      <InputFilter type="text" value={filter} onChange={handlerInputFilter} />
    </LabelFilter>
  );
};

export default Filter;
