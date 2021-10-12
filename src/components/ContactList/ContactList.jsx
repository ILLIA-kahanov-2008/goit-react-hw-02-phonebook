import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
  .selector1 {
    width: 100%;
    border-collapse: collapse;
    margin: 20px auto;
    box-shadow: lightgrey 1px 4px;
  }
  .selector2 {
    background-color: rgb(63, 207, 243);
    text-transform: uppercase;
    color: #fff;
  }
  .selector3 {
    line-height: 2;
    border: 1px solid #a3a1a1;
    text-align: center;
  }
`;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filteringName: PropTypes.string,
  cbRemoveContact: PropTypes.func.isRequired,
};

function ContactList({ contacts, filteringName, cbRemoveContact }) {
  return (
    <Styles>
      <table className="selector1">
        <thead className="selector2">
          <tr>
            <th className="selector3">Name</th>
            <th className="selector3">Phone Number</th>
            <th className="selector3">Etc.</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(
            ({ id, name, number }) =>
              name.toLowerCase().indexOf(filteringName.toLowerCase()) !==
                -1 && (
                <tr key={id}>
                  <td
                    className="selector3"
                    style={{ textTransform: "capitalize" }}
                  >
                    {name}
                  </td>
                  <td className="selector3">{number}</td>
                  <td className="selector3">
                    <button
                      className="button"
                      type="button"
                      onClick={cbRemoveContact}
                      id={id}
                    >
                      Delete contact
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </Styles>
  );
}

export default ContactList;
