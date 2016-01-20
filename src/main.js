// main.js
global.jQuery = require('jquery');
require('bootstrap');

var React     = require('react');
var ReactDOM  = require('react-dom');
var Alert     = require('react-bootstrap').Alert;

ReactDOM.render(
  (
  	<Alert className="alert alert-success fade in">
  		<strong>Success!</strong> Indicates a successful or positive action.
  	</Alert>
  ),
  document.getElementById('example')
);