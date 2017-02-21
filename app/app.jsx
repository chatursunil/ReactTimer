var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
const Timer = require('Timer');
const Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Timer}></IndexRoute>
      <Route path="countdown" component={Countdown}></Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
