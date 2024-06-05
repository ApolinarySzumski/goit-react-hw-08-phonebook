import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { StyledHeader } from "../StyledComponents/Header";
import { useAuth } from "../hooks/useAuth";
import { fetchContacts } from "../redux/appTasks/api";
import { getError, getIsLoading } from "../redux/appTasks/selectors";
import { logOut } from "../redux/auth/api";
import { ContactList } from "./ContactList";
import { Filter } from "./Filter";
import { Phonebook } from "./Phonebook";
import UserMenu from "./UserMenu";
import { Wrapper } from "./Wrapper";

const AppContent = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <section>
        <div>
          <p>Welcome, {user.username}</p>
          <button type="button" onClick={dispatch(logOut())}>
            Logout
          </button>
        </div>
        <Wrapper>
          <UserMenu />
          <StyledHeader>Phonebook</StyledHeader>
          <Phonebook />
          <StyledHeader>Filter</StyledHeader>
          <Filter />
          <StyledHeader>Contact List</StyledHeader>
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Wrapper>
      </section>
    </div>
  );
};

export default AppContent;
