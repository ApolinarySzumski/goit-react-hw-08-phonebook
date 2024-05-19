import { createSlice } from "@reduxjs/toolkit";

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
    addContact(state, action) {},
    deleteContact(state, action) {},
    filterContacts(state, action) {},
  },
});

export const { addContact, filterContacts, deleteContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
