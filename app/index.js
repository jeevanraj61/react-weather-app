var React = require('react');
var ReactDOM = require('react-dom');
import 'bootstrap/dist/css/bootstrap.min.css';
require('./index.css');

var Main = require('./components/Main');

ReactDOM.render(
  <Main/>,
  document.getElementById('main')
);