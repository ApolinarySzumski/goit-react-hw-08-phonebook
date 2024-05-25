import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  List,
  ListItem,
  Paragraph,
} from "../StyledComponents/ContactList";
import { deleteContact } from "../redux/api";
import { getContacts, getFilter } from "../redux/selectors";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterSelector = useSelector(getFilter);
  const filterValue = filterSelector.filter;

  const handleDelete = (contactId) => dispatch(deleteContact(contactId));

  return (
    <>
      <List>
        {contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(filterValue.toLowerCase()),
          )
          .map((contact) => (
            <ListItem key={nanoid()}>
              <Paragraph>
                {contact.name}: {contact.phone}
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
