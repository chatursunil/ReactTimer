var React = require('react');
const Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <Nav></Nav>
      <div className="row">
        <div className="column medium-6 large-4 small-centered">
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
