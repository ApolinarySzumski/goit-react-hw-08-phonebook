import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  {
    id: nanoid(),
    name: "Apolinary Szumski",
    number: "555 555 555",
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
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    loadContacts(state, action) {
      const data = window.localStorage.getItem("contacts");
      if (data !== null) state = action.payload;
    },
  },
});

export const { addContact, deleteContact, loadContacts } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
