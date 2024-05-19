import { useEffect, useState } from "react";
import { ContactList } from "./components/ContactList";
import { Filter } from "./components/Filter";
import { Header } from "./components/Header";
import { Phonebook } from "./components/Phonebook";
import { Wrapper } from "./components/Wrapper";
import { INITIAL_DATA } from "./constanses/INITIAL_DATA";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [data, setData] = useState(INITIAL_DATA);
  const [filter, setFilter] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "filter") {
      setFilter(value);
    }
    setData((prev) => {
      if (name === "filter") {
        return { name, ...prev };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  useEffect(() => {
    const data = window.localStorage.getItem("contacts");
    if (data !== null) setContacts(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }, [contacts, filter]);

  return (
    <Wrapper>
      <Header />
      <Phonebook
        contacts={contacts}
        data={data}
        setContacts={setContacts}
        handleChange={handleChange}
      />
      <Header text="Filter" />
      <Filter filter={filter} handleChange={handleChange} />
      <Header text="Contact List" />
      <ContactList
        contacts={contacts}
        setContacts={setContacts}
        filteredContacts={filteredContacts}
      />
    </Wrapper>
  );
};

export default App;
