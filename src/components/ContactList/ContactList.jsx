import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { deleteContacts } from 'redux/contacts/contacts.reducer';

import ContactItem from './ContactItem';

const ContactList = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  console.log('contacts', contacts)

  const clickDeletBtn = contactId => {
   
    dispatch(deleteContacts(contactId))
   
  };
 
  const getContacts = () => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  
  };
  const contactElem = getContacts();
  console.log('contactElem',contactElem)



  return (
    <ul>
      {contactElem.map(({id,name,number}) => (
        <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={clickDeletBtn}
        id={id}
        text='Delete'

        />
     
      ))}
    </ul>
  );
};

export default ContactList;
