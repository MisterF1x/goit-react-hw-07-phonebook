import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts;
export const selectorIsLoading = state => state.isLoading;
export const selectorError = state => state.error;
export const selectorFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
  [selectorContacts, selectorFilter],
  ({ items }, filter) => {
    const normalizedContacts = filter.toLowerCase();

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  }
);
