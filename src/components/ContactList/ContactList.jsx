import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { selectorContacts, selectorFilter } from 'redux/selectors';
import { List, Text } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(selectorContacts);
  const filter = useSelector(selectorFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

  if (!visibleContacts.length) {
    return <Text>No found!</Text>;
  }
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};
