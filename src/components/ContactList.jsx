import { useDispatch, useSelector } from "react-redux";
import ContactListStyles from "../StyledComponents/ContactListStyles";
import { deleteContact } from "../redux/contacts/api";
import { searchByContact } from "../redux/contacts/selectors";

export const ContactList = () => {
  const contacts = useSelector(searchByContact);
  const dispatch = useDispatch();

  return (
    <ContactListStyles>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </div>

            <button onClick={() => dispatch(deleteContact(contact.id))}>
              <span>Delete contact</span>
            </button>
          </li>
        ))}
      </ul>
    </ContactListStyles>
  );
};
