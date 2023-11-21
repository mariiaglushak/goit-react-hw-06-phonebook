// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
// import { deleteContactacts,addContacts } from 'redux/contacts/contacts.reducer';




const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contactsStore.contacts);
  // console.log('contacts', contacts)

  // const [filter, setFilter] = useState('');

  // const handlerFormSubmit = ({ name, number }) => {
  //   const normalizeName = name.toLowerCase();
  //   const ArrayNames = contacts.find(
  //     contact => contact.name.toLowerCase() === normalizeName
  //   );
  //   if (ArrayNames) {
  //     alert(`${name} вже є в книзі`);
  //     return;
  //   }
  //   dispatch(addContacts({ id: nanoid(), name: name, number: number }, ...contacts))
  // };

  // const handlerInputFilter = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter)
  //   );
  // };

  // const clickDeletBtn = contactId => {
   
  //   dispatch(deleteContactacts(contactId))
   
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const contactElem = getContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter
        text="Find contacts by name"
        
      />
      <ContactList />
    </>
  );
};

export default App;
