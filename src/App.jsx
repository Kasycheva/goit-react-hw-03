import "./App.css";
import "modern-normalize/modern-normalize.css";
import { useState, useEffect } from "react";
import contacts from "./assets/contacts.json";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { nanoid } from "nanoid";

const App = () => {
  const [contact, setContact] = useState(() => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      return savedContacts ? JSON.parse(savedContacts) : contacts;
    } catch (error) {
      console.error("Error loading contacts:", error);
      return contacts;
    }
  });

  const [searchContact, setSearchContact] = useState("");

  const handleSearchContact = (e) => {
    setSearchContact(e.target.value);
  };

  const filteredContacts = searchContact
    ? contact.filter((contact) =>
        contact.name.toLowerCase().includes(searchContact.toLowerCase())
      )
    : contact;

  const handleSubmit = (values, actions) => {
    if (contact.some((c) => c.name.toLowerCase() === values.name.toLowerCase())) {
      alert(`Contact with name ${values.name} already exists`);
      return;
    }
    const contactWithId = { ...values, id: nanoid(5) };
    setContact([...contact, contactWithId]);
    actions.resetForm();
  };

  const deleteContact = (id) => {
    setContact(contact.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contact));
    } catch (error) {
      console.error("Error saving contacts:", error);
    }
  }, [contact]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <SearchBox onChange={handleSearchContact} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;

