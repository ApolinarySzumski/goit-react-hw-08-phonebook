import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  {
    name: "Apolinary Szumski",
    number: "555",
  },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {},
    filterContacts(state, action) {},
  },
});

export const { addContact, filterContacts, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
