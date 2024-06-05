import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get("/contacts");
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData, thunkAPI) => {
    try {
      const resp = await axios.post("/contacts", contactData);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const resp = await axios.delete(`/contacts/${contactId}`);
      return resp.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

// export const updateContact = createAsyncThunk(
//   "contacts/updateContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const resp = await axios.patch(`/contacts/${contactId}`);
//       return resp.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   },
// );
