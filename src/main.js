import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './styles.css';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Container),
    document.getElementById('mount')
  );
});