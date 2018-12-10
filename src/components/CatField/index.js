import React from 'react';
import { PropTypes } from 'prop-types';

import './styles.scss';

const CategoryField = ({ name, onClick }) => (
  <div className="category-field-wrapper" onClick={onClick}>
    {name}
  </div>
);

CategoryField.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryField;
