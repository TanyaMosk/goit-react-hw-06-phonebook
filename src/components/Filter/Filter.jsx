import { setContactFilter } from "redux/actions";
import { InputFilter, TextFilter } from "./Filter.styled";
import { useDispatch } from "react-redux";


const Filter = () => { 
  const dispatch = useDispatch();

  return (
    <>      
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"        
        onChange={(evt)=>dispatch(setContactFilter(evt.target.value))} 
      />
    </>
  );
};

export default Filter