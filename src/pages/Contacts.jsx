import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { ContactList } from "../components/ContactList";
import Filter from "../components/Filter";
import { ContactForm } from "../components/FormComponent";
import { fetchContacts } from "../redux/contacts/api";
import { selectIsLoading } from "../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && "Request in progress.."}</div>
      <Filter />
      <ContactList />
    </>
  );
}
