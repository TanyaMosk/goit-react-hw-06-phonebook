import { createSlice } from "@reduxjs/toolkit";

const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
// const initialContacts = {
//     contacts: [
//             { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//             { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//             { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//             { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//         ],
   
// };

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
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        },
        deleteContacts(state, action) {
            return {  
                ...state,
                contacts: [...state.contacts.filter(contact => contact.id !== action.payload)]
            }
        }
    }
});

export const contactReducer = slice.reducer;
export const { addContacts, deleteContacts } = slice.actions;
