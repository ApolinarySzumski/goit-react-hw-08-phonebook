import PropTypes from "prop-types";
import { Button, Form, Input, Label } from "../StyledComponents/Phonebook";

export const Phonebook = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { name, number } = e.target.elements;
  //   if (contacts.some((contact) => contact.name === name.value) === true)
  //     alert(`${name.value} is already in contact list`);
  //   else dispatch(addContact(name.value, number.value));
  // };

  //onSubmit={handleSubmit}
  return (
    <Form>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        // pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        // pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

Phonebook.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  data: PropTypes.objectOf(PropTypes.string),
  setContacts: PropTypes.func,
  handleChange: PropTypes.func,
};
