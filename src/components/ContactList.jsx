import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  List,
  ListItem,
  Paragraph,
} from "../StyledComponents/ContactList";
import { deleteContact } from "../redux/contactsSlice";
import { getContacts } from "../redux/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleDelete = (contactId) => dispatch(deleteContact(contactId));

  return (
    <>
      <List>
        {contacts.map((contact) => (
          <ListItem key={nanoid()}>
            <Paragraph>
              {contact.name}: {contact.number}
            </Paragraph>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
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
