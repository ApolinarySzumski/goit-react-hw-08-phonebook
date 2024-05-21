import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeader } from "./StyledComponents/Header";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { Phonebook } from "./components/Phonebook";
import { Wrapper } from "./components/Wrapper";
import { fetchContacts } from "./redux/api";
import { getError, getIsLoading } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <StyledHeader>Phonebook</StyledHeader>
      <Phonebook />
      <StyledHeader>Filter</StyledHeader>
      <Filter />
      <StyledHeader>Contact List</StyledHeader>
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Wrapper>
  );
};

export default App;
