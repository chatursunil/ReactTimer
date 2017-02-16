const React = require('react');
const {Link, IndexLink} = require('react-router');

const Nav = React.createClass({
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">React Timer Application</li>
                        <li>
                            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <div className="menu-text">
                        Created By <a href="https://github.com/chatursunil" target="_blank">Sunil Chaturvedi</a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Nav;