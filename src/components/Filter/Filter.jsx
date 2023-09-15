// import { setContactFilter } from "redux/filterSlice";
import { setContactFilter } from "redux/contactsSlice";
import { InputFilter, TextFilter, TitleFilter } from "./Filter.styled";
import { useDispatch } from "react-redux";


const Filter = () => { 
  const dispatch = useDispatch();
  
  return (
    <> 
    <TitleFilter>Contacts</TitleFilter>  
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"        
        onChange={(evt)=>dispatch(setContactFilter(evt.target.value))} 
      />
    </>
  );
};

export default Filter