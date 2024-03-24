import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = payload;
};

const contactsSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    currentId: null,
    isLoading: false,
    error: null,
  },

  reducers: {
    sortContacts(state, { payload }) {
      state.items = payload;
    },
    setCurrentId(state, { payload }) {
      state.currentId = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items.push(payload);
        state.isLoading = false;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact._id === payload._id
        );
        state.items.splice(index, 1);
        state.isLoading = false;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(editContact.pending, handlePending)
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.error = null;
        state.items = state.items.map((el) => {
          if (el._id === payload._id) return payload;
          return el;
        });
        state.isLoading = false;
      })
      .addCase(editContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { sortContacts, setCurrentId } = contactsSlice.actions;
