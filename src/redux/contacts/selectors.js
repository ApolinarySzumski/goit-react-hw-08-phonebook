export const selectContacts = (state) => {
  return state.contacts?.items;
};

export const selectFilters = (state) => state.filters.searchBy || "";

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectError = (state) => state.contacts.error;

export const searchByContact = (state) => {
  const contacts = selectContacts(state);
  const searchTerm = selectFilters(state);

  return contacts.filter(
    (c) => c.name.includes(searchTerm) || c.number.includes(searchTerm),
  );
};

export const selectContactsCount = (state) => {
  const contacts = selectContacts(state);

  return contacts.reduce((count) => {
    return count;
  });
};
