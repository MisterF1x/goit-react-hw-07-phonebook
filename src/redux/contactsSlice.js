import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer } from 'redux-persist';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '+380-32-459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '+980-32-443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '180-32-645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '380-32-227-91-26' },
// ];
// {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   }
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(({ id }) => id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
