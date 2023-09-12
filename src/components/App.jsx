import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";
import { useEffect, useState } from "react";


const STORAGE_KEY = 'phonebook-storage';

  // const getInitialContacts = ()=>{
  //   const storageContacts = localStorage.getItem(STORAGE_KEY);  

  //   if (storageContacts !== null) {
  //     return JSON.parse(storageContacts);
  //   }
  //   return initialContacts;
  // }

export const App = () => {

  // useEffect(()=>{         
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));  
  //  },[contacts]);        
       
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )
};