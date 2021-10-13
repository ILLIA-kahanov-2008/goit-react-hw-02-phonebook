import React, { Component } from "react";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
      { id: "id-5", name: "Will Smith", number: "911-911-911" },
      { id: "id-6", name: "Alice Cooper", number: "666-99-333" },
    ],
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNewContact = (newContact) => {
    const { contacts } = this.state;
    const isExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    isExists
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  removeContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((contact) => contact.id !== id),
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm cbAddNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filteringName={filter} cbInputChange={this.handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          cbRemoveContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
