import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import FormStyles from "../StyledComponents/FormStyles";
import { addContact } from "../redux/contacts/api";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const loginInputId = nanoid();

  const numberInputLabelId = nanoid();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      addContact({
        name: e.target.elements.name.value,
        number: e.target.elements.number.value,
      }),
    );
    form.reset();
  };

  return (
    <FormStyles>
      <form onSubmit={handleSubmit}>
        <label htmlFor={loginInputId}>
          Name
          <input
            id={loginInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['\s\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label htmlFor={numberInputLabelId}>
          Number
          <input
            type="tel"
            name="number"
            id={numberInputLabelId}
            pattern="^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$"
            required
          />
        </label>
        <button type="submit">
          <span>Add contact</span>
        </button>
      </form>
    </FormStyles>
  );
};
