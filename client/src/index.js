import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

const App = (props) => {
  return (
    <h2>{ props.message }</h2>
  );
};

App.propTypes = {
  message: PropTypes.string,
};

App.defaultProps = {
  message: 'Hello!',
};

ReactDOM.render(<App />, document.getElementById('root'));
