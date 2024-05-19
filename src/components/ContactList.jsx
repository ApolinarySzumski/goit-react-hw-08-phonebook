import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  Button,
  List,
  ListItem,
  Paragraph,
} from "../StyledComponents/ContactList";
import { getContacts } from "../redux/selectors";

export const ContactList = () => {
  // const handleDelete = (contactToDelete) => {
  //   setContacts(contacts.filter((contact) => contact !== contactToDelete));
  // };
  // onClick={() => handleDelete(contact)}
  const contacts = useSelector(getContacts);
  return (
    <>
      <List>
        {contacts.map((contact) => (
          <ListItem key={nanoid()}>
            <Paragraph>
              {contact.name}: {contact.number}
            </Paragraph>
            <Button>Delete</Button>
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
