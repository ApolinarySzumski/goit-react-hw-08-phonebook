import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import {
  Button,
  List,
  ListItem,
  Paragraph,
} from "../StyledComponents/ContactList";

export const ContactList = ({ contacts, setContacts, filteredContacts }) => {
  const handleDelete = (contactToDelete) => {
    setContacts(contacts.filter((contact) => contact !== contactToDelete));
  };
  return (
    <>
      <List>
        {filteredContacts.map((contact) => (
          <ListItem key={nanoid()}>
            <Paragraph>
              {contact.name}: {contact.number}
            </Paragraph>
            <Button onClick={() => handleDelete(contact)}>Delete</Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  setContacts: PropTypes.func,
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
