import { deleteContacts } from "redux/actions";
import { DeleteBtn, List, WrapItem, Text, WrappText } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
 
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          <WrapItem>
            <WrappText>
            <Text>{name}</Text>
            <Text> {number}</Text>
           </WrappText>
            <DeleteBtn onClick={() => dispatch(deleteContacts(id))} >Delete</DeleteBtn>
          </WrapItem>
        </li>
      ))}
    </List>
  )
};

export default ContactList