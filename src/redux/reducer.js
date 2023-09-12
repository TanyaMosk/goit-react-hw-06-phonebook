import { combineReducers } from "redux";

const initialContacts = {
    contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
    filter: "",
};

const contactReduser = (state = initialContacts, action) => {
    switch (action.type) {
        case "contacts/addContacts":

        const checkContact = state.contacts.find(contact => contact.name === action.payload.name);         
      
        if (checkContact) {    
            alert(`${action.payload.name} is already in contacts.`);
            return state;
        }              
         return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };               
         
        case "contacts/deleteContacts":
            return {
                ...state,
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload)]
            }            
        
        default:
            return state;        
    }     
};

const filterReducer = (state = { filter: '' }, action) => {
    switch (action.type) {
        case "filter/setContactFilter":
            return {
                ...state,
                filter: action.payload,
            };
        default:
            return state;
    }
};

export const rootReduser = combineReducers({
    contacts: contactReduser,
    filter: filterReducer,
});
