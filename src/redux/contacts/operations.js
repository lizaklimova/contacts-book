import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk(
  "contacts/getContacts",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", newContact);

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContacts",
  async ({ id, body }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, body);

      return data;
    } catch ({ message }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
