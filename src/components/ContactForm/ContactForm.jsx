import React, { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import styles from "./ContactForm.module.css";
class ContactForm extends Component {
  state = {
    name: "",
    number: "",
    newContact: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { cbAddNewContact } = this.props;
    const newContact = {
      name,
      number,
      id: shortid(),
    };
    this.setState({ name: "", number: "", newContact });
    cbAddNewContact(newContact);
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <p>Name</p>
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            placeholder="Enter new contact name"
          />
        </label>
        <label>
          <p>Number</p>
          <input
            className="input"
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            placeholder="Enter new contact number"
          />
        </label>
        <button className="button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  cbAddNewContact: PropTypes.func.isRequired,
};
