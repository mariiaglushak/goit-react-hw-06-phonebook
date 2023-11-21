import { createSlice } from "@reduxjs/toolkit";

const initialState={
    contacts: JSON.parse(localStorage.getItem('contacts')) ?? []
}

const contactsSlice = createSlice({
  
  name: "contacts",
 
  initialState,

  reducers: {
    addContacts(state, action) {
        state.contacts=[...state.contacts, action.payload]
    },
    deleteContacts(state, action) {
        state.contacts=state.contacts.filter(contact => contact.id !== action.payload)
    },
   
  },
});


export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;



// export const contactsReducer = (state = initialState ,action)=>{
//     switch(action.type){
//         case 'contacts/addContacts':{
//             return {
//                 ...state,
//                 contacts:[...state.contacts, action.payload],
//             }

//         }
//         case 'contacts/deleteContacts':{
//             return{
//                 ...state,
//                 contacts:state.contacts.filter(contact => contact.id !== action.payload)
//             }
//         }
//         default:
//             return state;
//     }
 
// };

// export const deleteContacts=(payload)=>{
//     return{
//         type:'contacts/deleteContacts',
//       payload,
//     }

// }


// export const addContacts=(payload)=>{
//     return{
//         type:'contacts/addContacts',
//       payload,
//     }

// }