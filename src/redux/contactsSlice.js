import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const slice = createSlice({
    name: "contacts",
    initialState: initialContacts,
    reducers: {
        addContacts(state, action) {
            const checkContact = state.contacts.find(contact => contact.name === action.payload.name);
            if (checkContact) {
                alert(`${action.payload.name} is already in contacts.`);
                return state;
            }
            return {                
                contacts: [...state.contacts, action.payload],
            };
        },
        deleteContacts(state, action) {
            return {                
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload)]
            }
        }
    }
});

export const contactReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;

// export const addContacts =(contact) => {
//     return {
//         type: "contacts/addContacts",
//         payload: contact,
//     };
// };

// export const deleteContacts = contactId => {
//     return {
//         type: "contacts/deleteContacts",
//         payload: contactId,
//     };
// };


// export const contactReducer = (state = initialContacts, action) => {
//     switch (action.type) {
//         case "contacts/addContacts":

//         const checkContact = state.contacts.find(contact => contact.name === action.payload.name);         
      
//         if (checkContact) {    
//             alert(`${action.payload.name} is already in contacts.`);
//             return state;
//         }              
//          return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };               
         
//         case "contacts/deleteContacts":
//             return {
//                 ...state,
//                 contacts: [...state.contacts.filter(contact => contact.id !== action.payload)]
//             }            
        
//         default:
//             return state;        
//     }     
// };