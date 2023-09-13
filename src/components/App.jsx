import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";

export const App = () => {     
       
  return (
    <div>      
      <ContactForm />      
      <Filter />
      <ContactList />
    </div>
  )
};