import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";

Filter.propTypes = {
  filteringName: PropTypes.string,
  cbInputChange: PropTypes.func.isRequired,
};

function Filter({ filteringName, cbInputChange }) {
  return (
    <label className={styles.filter}>
      <p className="label">Find contacts by name</p>
      <input
        className="input"
        type="text"
        name="filter"
        value={filteringName}
        onChange={cbInputChange}
        placeholder="Enter query name"
      />
    </label>
  );
}

export default Filter;
